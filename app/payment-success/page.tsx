"use client";

import Link from "next/link";
import { FC } from "react";

const PaymentSuccess: FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
        <svg
          className="w-16 h-16 mx-auto text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>

        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mt-2">
          Thank you for your generous support 💛
        </p>

        <p className="text-sm text-gray-400 mt-1">
          A payment receipt has been sent to your email by PayPal.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccess;
