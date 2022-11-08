import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  desc: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  address: {
    ethereum: [String]
  },
  comments: [{ body: String, date: Date }],
});


const UserModel: ReturnType<typeof model<typeof userSchema>> = mongoose.models.User as any || mongoose.model('User', userSchema)

export default UserModel;