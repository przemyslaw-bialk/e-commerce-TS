import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" flex items-center justify-center p-2 bg-red-400">
      <SignUp />
    </div>
  );
}
