import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
