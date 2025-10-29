"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="w-full min-h-[60vh] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <p className="text-sm font-semibold text-red-600 tracking-wide uppercase">Error</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Something went wrong
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We encountered an unexpected error. You can try again or return to the
          homepage.
        </p>
        {process.env.NODE_ENV !== "production" && error?.message ? (
          <p className="mt-4 text-sm text-gray-500">{error.message}</p>
        ) : null}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Link href="/">
            <Button variant="outline">Go to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}


