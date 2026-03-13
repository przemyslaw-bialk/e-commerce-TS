import { auth } from "@clerk/nextjs/server";
import { authorizeAdmin } from "app/_services/user.service";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  const admin = await authorizeAdmin(userId);

  if (!admin) {
    return <div>UNAUTHORIZED</div>;
  }

  return (
    <div>
      <h2>DASHBOARD</h2>
      {children}
    </div>
  );
}
