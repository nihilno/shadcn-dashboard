import { Badge } from "../ui/badge";

function UserData({
  label,
  content,
  badge = false,
}: {
  label: string;
  content: string;
  badge?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-bold capitalize">{label}:</span>
      <span>{badge ? <Badge>{content}</Badge> : content}</span>
    </div>
  );
}

export default UserData;
