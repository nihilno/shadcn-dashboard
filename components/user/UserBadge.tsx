import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function UserBadge({
  children,
  label,
  text,
}: {
  children: React.ReactNode;
  label: string;
  text?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <HoverCard openDelay={200} closeDelay={0}>
        <HoverCardTrigger className="cursor-pointer">
          {children}
        </HoverCardTrigger>
        <HoverCardContent sideOffset={6} className="p-3">
          <h1 className="mb-2 font-bold capitalize">{label}</h1>
          <p className="text-muted-foreground text-sm first-letter:capitalize">
            {text}
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default UserBadge;
