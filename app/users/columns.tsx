"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export type User = {
  id: string;
  username: string;
  email: string;
  status: "active" | "inactive" | "suspended";
  balance: number;
};

const cellStyle = {
  active: "bg-green-500/40",
  inactive: "bg-yellow-500/40",
  suspended: "bg-red-500/40",
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          checked={row.getIsSelected()}
        />
      );
    },
  },
  { accessorKey: "username", header: "User" },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as
        | "active"
        | "inactive"
        | "suspended";

      return (
        <div className={cn("w-max rounded-md p-1 text-xs", cellStyle[status])}>
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "balance",
    header: () => <div>Balance</div>,
    cell: ({ row }) => {
      const balance = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(balance);

      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={`users/${user.id}`}>View user</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
