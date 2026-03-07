import User from "@models/User";
import dbConnect from "@lib/mongodb";

const createOrUpdateUser = async (
  clerkId: string,
  firstName: string,
  lastName: string,
  email: string,
) => {
  await dbConnect();

  const user = await User.findOneAndUpdate(
    { clerkId },
    {
      $set: {
        firstName,
        lastName,
        email,
      },
    },
    {
      new: true,
      upsert: true,
    },
  );

  return user;
};

export default createOrUpdateUser;
