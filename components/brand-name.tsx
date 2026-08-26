import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
}

/**
 * Renders the "WiSabi" wordmark inline, with "Sabi" picked out in the
 * brand orange so the name stands out wherever it appears in running text.
 */
export function BrandName({ className }: BrandNameProps) {
  return (
    <span className={cn("font-bold whitespace-nowrap", className)}>
      Wi<span className="text-primary">Sabi</span>
    </span>
  );
}
