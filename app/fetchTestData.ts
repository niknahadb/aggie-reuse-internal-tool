import { createClient } from "../utils/supabase/client"; // Adjust the path as necessary

const supabase = createClient();

export async function fetchTestData() {
  const { data, error } = await supabase.from("test").select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
}
