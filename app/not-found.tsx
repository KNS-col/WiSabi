import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-black mb-4">Page Not Found</h2>
        <p className="text-dark-gray mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
