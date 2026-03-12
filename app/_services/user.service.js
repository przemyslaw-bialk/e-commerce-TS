import User from "@models/User";
import dbConnect from "@lib/mongodb";

// create or update user
export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  email_addresses,
) => {
  await dbConnect();

  try {
    const email = email_addresses?.[0]?.email_address;
    let role;

    if (email === "przemek.bialkwno@gmail.com") {
      role = "admin";
    } else {
      role = "user";
    }

    const user = await User.findOneAndUpdate(
      {
        clerkId: id,
      },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          email,
          role: role,
        },
      },
      { upsert: true, returnDocument: "after" },
    );

    return user;
  } catch (err) {
    console.log(err);
  }
};

// delete user

export const deleteUser = async (id) => {
  await dbConnect();

  try {
    const user = await User.findOneAndDelete({ clerkId: id });
    return user;
  } catch (err) {
    console.log(err);
  }
};

// authorize admin

export const authorizeAdmin = async (id) => {
  await dbConnect();

  try {
    const user = await User.findOne({ clerkId: id });

    if (!user || user.role !== "admin") {
      return null;
    }

    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
};
