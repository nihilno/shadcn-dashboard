import Title from "@/components/global/Title";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoCalendar from "./TodoCalendar";

function TodoList() {
  const NUM_ITEMS = 10;

  return (
    <div>
      <Title>Todo List</Title>
      <TodoCalendar />
      <ScrollArea className="thin-scrollbar mt-4 max-h-[400px] overflow-y-auto">
        <div className="space-y-4">
          {Array.from({ length: NUM_ITEMS }, (_, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={`item-${index}`} className="cursor-pointer" />
                <label
                  htmlFor={`item-${index}`}
                  className="text-muted-foreground checked:text-foreground cursor-pointer text-sm"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  sed.
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default TodoList;
