import Breadcrumbs from "@/components/global/Breadcrumbs";
import Title from "@/components/global/Title";
import { getUserData } from "@/lib/tables-data";
import { Metadata } from "next";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
  title: "Shadcn Dashboard | Users",
};

async function UsersPage() {
  const userData = await getUserData();

  return (
    <div>
      <Breadcrumbs />
      <div className="bg-secondary mt-4 mb-8 rounded-md px-4 py-2">
        <Title className="m-0">All Users</Title>
      </div>
      <DataTable columns={columns} data={userData} />
    </div>
  );
}

export default UsersPage;
