"use client";

import { useUser } from "@clerk/nextjs";

const Greetings = () => {
  const { isSignedIn, user } = useUser();

  return (
    <>
      {isSignedIn ? (
        <p>Hello there {user.firstName}, how are you?</p>
      ) : (
        <p>Please log in first</p>
      )}
    </>
  );
};

export default Greetings;
