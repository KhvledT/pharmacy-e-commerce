import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="w-full min-h-[60vh] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <p className="text-sm font-semibold text-[#22C55E] tracking-wide uppercase">404</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Page not found
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          The page you’re looking for doesn’t exist or has been moved. Explore our
          products or head back to the homepage.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/">
            <Button>Go to Home</Button>
          </Link>
          <Link href="/products">
            <Button variant="outline">Browse Products</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}


