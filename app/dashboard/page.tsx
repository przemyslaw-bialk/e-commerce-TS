// import { auth } from "@clerk/nextjs/server";
// import { authorizeAdmin } from "app/_services/user.service";

export default async function DashboardPage() {
  // const { userId } = await auth();

  // const admin = await authorizeAdmin(userId);

  // if (!admin) {
  //   return <div>UNAUTHORIZED</div>;
  // }

  return (
    <div>
      <h2>dashboard page</h2>
    </div>
  );
}
