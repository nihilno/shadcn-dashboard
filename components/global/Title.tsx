import { cn } from "@/lib/utils";

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("mb-6 text-lg font-medium capitalize", className)}>
      {children}
    </h1>
  );
}

export default Title;
