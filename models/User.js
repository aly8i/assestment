import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    phonenumber: {
      type: String,
      default: null,
      maxlength: 2000,
      unique: true,
    },
    address: {
        type: String,
        default: null,
        maxlength: 3000,
    }
  },
  { timestamps: true }
);
export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
