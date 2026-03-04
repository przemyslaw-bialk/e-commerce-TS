"use client";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@components/ui/button";

const AuthButtons = () => {
  return (
    <div>
      <SignInButton />
      <SignUpButton>
        <Button>sign up</Button>
      </SignUpButton>
      <UserButton />
    </div>
  );
};

export default AuthButtons;
