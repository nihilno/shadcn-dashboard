import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import UserBadge from "./UserBadge";

function Badges() {
  return (
    <div className="flex items-center gap-4">
      <UserBadge label="Verified User" text="This user has been verified.">
        <BadgeCheck
          size={32}
          className="rounded-full border border-blue-500/50 bg-blue-500/30 p-1"
        />
      </UserBadge>

      <UserBadge
        label="Admin"
        text="Admin users have acces to all features and can manage users."
      >
        <Shield
          size={32}
          className="rounded-full border border-green-800/50 bg-green-800/30 p-1"
        />
      </UserBadge>

      <UserBadge
        label="Awarded"
        text="This user has been awarded for their contirbutions."
      >
        <Candy
          size={32}
          className="rounded-full border border-yellow-500/50 bg-yellow-500/30 p-1"
        />
      </UserBadge>

      <UserBadge
        label="Popular"
        text="This user has been popular in the community."
      >
        <Citrus
          size={32}
          className="rounded-full border border-orange-500/50 bg-orange-500/30 p-1"
        />
      </UserBadge>
    </div>
  );
}

export default Badges;
