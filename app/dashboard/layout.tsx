import { auth } from "@clerk/nextjs/server";
import AdminSidebar from "@components/admin/AdminSidebar";
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
    <div className="flex gap-2">
      <AdminSidebar />
      <div className=" w-full">{children}</div>
    </div>
  );
}
