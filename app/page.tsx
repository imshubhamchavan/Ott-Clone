import { getServerSession } from "next-auth";
import { authOption } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOption);
   
    if (!session) {
      return redirect("/login");
    } else {
      return redirect("/home");
    }

}