import User from "@models/User";
import dbConnect from "@lib/mongodb";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  email_addresses,
) => {
  await dbConnect();

  try {
    const email = email_addresses?.[0].email_address;
    console.log(email);

    const user = await User.findOneAndUpdate(
      {
        clerkId: id,
      },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          email,
          role: "user",
        },
      },
      { upsert: true, returnDocument: "after" },
    );

    return user;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (id) => {
  await dbConnect();

  try {
    const user = await User.findOneAndDelete({ clerkId: id });
    return user;
  } catch (err) {
    console.log(err);
  }
};
