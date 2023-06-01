import TodoItem from "@/components/TodoItem";
import { Todo } from "@/db/schema";
import { db } from "@/db";
import { todos } from "@/db/schema";

export const dynamic = 'force-dynamic'

async function fetchTodos() {
  return db.select().from(todos).all();
}

export default async function TodosPage() {
  const todos = await fetchTodos();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold font-heading text-xl text-center">
        Your Tasks
      </h1>
      {todos.map((todo: Todo) => <TodoItem {...todo} key={todo.id} />)}
    </div>
  );
}
