import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import MacroForm from "./dashboard-components/MacroForm";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <MacroForm />
    </div>
  );
}
