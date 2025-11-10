import CardList from "@/components/cards/CardList";
import AppLineChart from "@/components/charts/AppLineChart";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import Title from "@/components/global/Title";
import Badges from "@/components/user/Badges";
import UserCard from "@/components/user/UserCard";
import UserInformation from "@/components/user/UserInformation";
import UserSheet from "@/components/user/UserSheet";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadcn Dashboard | User",
};

function UserPage() {
  const containerClass = "bg-primary-foreground rounded-lg p-4";

  return (
    <>
      <Breadcrumbs />
      <div className="mt-4 flex flex-col gap-8 xl:flex-row">
        <div className="w-full space-y-6 xl:w-1/3">
          <div className={cn("min-h-28", containerClass)}>
            <Title className="mb-4">User Badges</Title>
            <Badges />
          </div>

          <div className={cn(containerClass)}>
            <div className="mb-4 flex items-center justify-between">
              <Title className="mb-0">User Information</Title>
              <UserSheet />
            </div>
            <UserInformation />
          </div>

          <div className={cn(containerClass)}>
            <CardList title="Recent Transactions" />
          </div>
        </div>

        <div className="w-full space-y-6 xl:w-2/3">
          <div className={cn("min-h-28", containerClass)}>
            <UserCard />
          </div>

          <div className={cn(containerClass)}>
            <AppLineChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
