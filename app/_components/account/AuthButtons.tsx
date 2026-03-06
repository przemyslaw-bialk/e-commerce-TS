import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@components/ui/button";

const AuthButtons = () => {
  return (
    <div className="flex gap-2">
      <SignInButton>
        <Button>Sign in</Button>
      </SignInButton>
      <SignUpButton>
        <Button>Sign up</Button>
      </SignUpButton>
      <UserButton />
    </div>
  );
};

export default AuthButtons;
