"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import UserEdit from "./UserEdit";

export default function UserSheet() {
  const [open, setOpen] = useState(false);
  const handleSuccess = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Edit User</Button>
      </SheetTrigger>
      <UserEdit onSuccess={handleSuccess} />
    </Sheet>
  );
}
