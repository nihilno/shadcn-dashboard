import UserAvatar from "@/components/global/UserAvatar";

function UserCard() {
  return (
    <>
      <div className="flex items-center gap-4">
        <UserAvatar size={12} />
        <h1 className="text-xl font-semibold">John Doe</h1>
      </div>
      <p className="text-muted-foreground mt-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit ut
        voluptate a, aliquam non fugiat provident! Voluptates maiores asperiores
        dolore aliquid nulla. Dolorem natus commodi vel deleniti repellendus eos
        minima sapiente distinctio. Quam sequi, ea esse est soluta expedita.
      </p>
    </>
  );
}

export default UserCard;
