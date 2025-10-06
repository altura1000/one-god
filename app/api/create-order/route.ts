import { NextResponse } from "next/server";

export async function POST(req: Request) {
  /*
  const origin = req.headers.get("origin");
   console.log("origin - ",origin);
  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL;

  if (process.env.NODE_ENV === "production" && origin !== allowedOrigin) {
    return NextResponse.json({ error: "Unauthorized origin" }, { status: 403 });
  }*/


  ///////////////// CHANGE LATER ///////////////////////
  const IS_PRODUCTION = false;

  try {
    const body = await req.json();
    const { amount } = body;

    // ✅ 1. Validate input strictly
    const value = Number(amount);
    if (!Number.isFinite(value) || value < 1 || value > 10000) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    // ✅ 2. Securely access environment variables
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

    if (!clientId || !secret || !base) {
      return NextResponse.json(
        { error: "Missing PayPal configuration" },
        { status: 500 }
      );
    }

    // ✅ 3. Get OAuth token from PayPal
    const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

    const tokenRes = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!tokenRes.ok) {
      console.error("PayPal token error:", await tokenRes.text());
      return NextResponse.json(
        { error: "Failed to get PayPal access token" },
        { status: 500 }
      );
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // ✅ 4. Create the PayPal order securely
    const orderRes = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: value.toFixed(2),
            },
          },
        ],
      }),
    });

    const orderData = await orderRes.json();

    if (!orderRes.ok || !orderData?.id) {
      console.error("PayPal order error:", orderData);
      return NextResponse.json(
        { error: "Failed to create PayPal order" },
        { status: 500 }
      );
    }

    // ✅ 5. Only return what the frontend needs
    return NextResponse.json({ id: orderData.id });
  } catch (err: any) {
    console.error("PayPal API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}