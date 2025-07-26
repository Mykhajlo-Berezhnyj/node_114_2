import { model, Schema } from "mongoose";

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

UserSchema.set("toJSOn", {
  transform(doc, obj) {
    delete obj.password;
    return obj;
  },
});

export const User = model("user", UserSchema);
