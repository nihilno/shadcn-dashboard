import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserAvatar({ size }: { size?: number }) {
  return (
    <Avatar className={`cursor-pointer size=${size}`}>
      <AvatarImage src="https://github.com/nihilno.png" />
      <AvatarFallback>MP</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
