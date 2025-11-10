import CardList from "@/components/cards/CardList";
import AppAreaChart from "@/components/charts/AppAreaChart";
import AppBarChart from "@/components/charts/AppBarChart";
import AppPieChart from "@/components/charts/AppPieChart";
import TodoList from "@/components/todos/TodoList";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const containerClass = "bg-primary-foreground rounded-lg p-4";

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <div
        className={cn(
          containerClass,
          "lg:col-span-2 xl:col-span-1 2xl:col-span-2",
        )}
      >
        <AppBarChart />
      </div>

      <div className={cn(containerClass)}>
        <CardList title="Latest Transactions" />
      </div>

      <div className={cn(containerClass)}>
        <AppPieChart />
      </div>

      <div className={cn(containerClass)}>
        <TodoList />
      </div>

      <div
        className={cn(
          containerClass,
          "lg:col-span-2 xl:col-span-1 2xl:col-span-2",
        )}
      >
        <AppAreaChart />
      </div>
      <div className={cn(containerClass)}>
        <CardList />
      </div>
    </div>
  );
}
