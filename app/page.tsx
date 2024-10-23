import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { fetchTestData } from "./fetchTestData";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: todos } = await supabase.from("todos").select();
  const testData = await fetchTestData();

  return (
    <>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <h2>Test Data:</h2>
      <ul>
        {testData?.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}
