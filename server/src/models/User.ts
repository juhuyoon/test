import { Schema, model, Document } from "mongoose";
// import bcrypt from "bcrypt";

// Define an interface for the User document
interface IUser extends Document {
  _id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
//   comparePassword: (password: string) => Promise<boolean>;
}

// Define the User schema
const UserSchema = new Schema<IUser>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, unique: true, minlength: 8 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: { type: String, required: true, minlength: 8 },
});

// // Middleware to create password
// UserSchema.pre<IUser>("save", async function (next) {
//   if (this.new || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // method to compare and validate password for login
// UserSchema.methods.comparePassword = async function (
//   password: string
// ): Promise<boolean> {
//   return bcrypt.compare(password, this.password);
// };

// Create the User model
const User = model<IUser>("User", UserSchema);

export default User;
