import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100dvh-80px)] items-center justify-center">
      <div className="z-10 px-6 text-center">
        <h1 className="text-9xl font-black tracking-tighter md:text-[220px]">
          <span className="from-primary">404</span>
        </h1>

        <p className="drop-shadow-glow mt-6 text-2xl font-bold text-white md:text-4xl">
          This page is long gone.
        </p>
        <p className="mx-auto mt-4 max-w-md text-lg">
          The page you’re looking for has ghosted you. Let’s get you back home.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
