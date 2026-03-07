"use client";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "@components/ui/button";

const AuthButtons = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex gap-2">
      {isSignedIn ? (
        <SignOutButton />
      ) : (
        <>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign up</Button>
          </SignUpButton>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
