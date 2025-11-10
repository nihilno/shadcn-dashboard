import Title from "@/components/global/Title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { latestTransactions, popularContent } from "@/lib/cards-data";
import Image from "next/image";

function CardList({ title = "Popular Content" }: { title?: string }) {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;

  return (
    <div>
      <Title>{title}</Title>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary" className="-translate-x-1">
                {item.badge}
              </Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
