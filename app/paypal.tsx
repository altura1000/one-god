"use client";
import { useEffect, useState } from "react";

export default function Support() {
  const [amount, setAmount] = useState("");
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const presetAmounts = [1, 5, 10, 15, 20];

  useEffect(() => {
    function renderButtons() {
      if (!window.paypal) return;

      const container = document.getElementById("paypal-buttons");
      if (container) container.innerHTML = "";

      window.paypal.Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "paypal",
        },
        // ✅ Ask your server to create the order
        createOrder: async () => {
          const res = await fetch("/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amount || "1.00" }),
          });

          const data = await res.json();
          console.log("Order created:", data);

          return data.id; // PayPal expects order ID here
        },
        // ✅ Capture via PayPal SDK
        onApprove: async (data, actions) => {
          const details = await actions.order.capture();
          alert("Thanks, " + details.payer.name.given_name + "!");
        },
      }).render("#paypal-buttons");
    }

    // Load SDK
    if (!window.paypal) {
      if (!document.getElementById("paypal-sdk")) {
        const script = document.createElement("script");
        script.id = "paypal-sdk";
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons&enable-funding=venmo,card`;
        script.async = true;
        script.onload = renderButtons;
        document.body.appendChild(script);
      }
    } else {
      renderButtons();
    }
  }, [amount, clientId]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-yellow-200">
        <h1 className="text-3xl font-extrabold text-yellow-600 mb-2">Support Us</h1>
        <p className="text-gray-600 italic mb-6">
          Your support helps us keep creating and growing. 💛
        </p>

        {/* Preset Amount Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(String(amt))}
              className={`px-4 py-2 rounded-lg border font-medium transition ${
                amount === String(amt)
                  ? "bg-yellow-400 text-white border-yellow-500"
                  : "bg-white hover:bg-yellow-100 border-gray-300"
              }`}
            >
              ${amt}
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <input
          type="number"
          placeholder="Other amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg px-4 py-2 w-40 text-center mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />

        {/* PayPal button */}
        <div id="paypal-buttons" />
      </div>
    </div>
  );
}