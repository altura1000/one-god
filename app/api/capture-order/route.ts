// app/api/capture-order/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const IS_PRODUCTION = true;

    let clientId = "";
    let secret = "";
    let base = "";    

    //process.env.PUBLIC_PAYPAL_ENV === "sandbox"
     if(!IS_PRODUCTION) {
      clientId = process.env.PAYPAL_CLIENT_ID!;
      secret = process.env.PAYPAL_SECRET!;
      base = process.env.PAYPAL_API!;
    } else {
      clientId = process.env.PAYPAL_CLIENT_ID_PRODUCTION!;
      secret = process.env.PAYPAL_SECRET_PRODUCTION!;
      base = process.env.PAYPAL_API_PRODUCTION!;
    }
  
    try {
    const { orderID } = await req.json();

    const auth = Buffer.from(
      `${clientId}:${secret}`
    ).toString("base64");

    const res = await fetch(
      `${base}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to capture order" }, { status: 500 });
  }
}
