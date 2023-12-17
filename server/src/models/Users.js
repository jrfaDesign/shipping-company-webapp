import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  admin: { type: Boolean, required: false },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  videoClasses: { type: Array },
  ebooks: { type: Array },
});

export const UserModel = mongoose.model("users", UsersSchema);
