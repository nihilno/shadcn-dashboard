import { Progress } from "@/components/ui/progress";
import UserData from "./UserData";

function UserInformation() {
  return (
    <>
      <div className="space-y-4">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-muted-foreground text-sm">Profile completion</p>
          <Progress value={66} />
        </div>
        <UserData label="Username" content="john.doe" />
        <UserData label="Email" content="john.doe@gmail.com" />
        <UserData label="Phone" content="+1 234 5678" />
        <UserData label="Location" content="New York, NY" />
        <UserData label="Role" content="Admin" badge={true} />
      </div>
      <p className="text-muted-foreground mt-6 text-sm">
        Joined: January 21, 2025
      </p>
    </>
  );
}

export default UserInformation;
