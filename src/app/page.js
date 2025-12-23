import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();

  const branchId = cookieStore.get("branchId")?.value;
  const unitId = cookieStore.get("unitId")?.value;

  if (!branchId || !unitId) {
    redirect("/select-branch");
  }

  redirect(`/branch/${branchId}/unit/${unitId}/menu`);
}
