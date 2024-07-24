import mongoose, { Document, Types }from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

interface PersonalRecords {
  _id: Types.ObjectId;
  name: string;
  weight: number;
  unit: string;
}
interface UserI extends Document {
  username: string;
  email: string;
  password: string;
  personalRecords: PersonalRecords[];
}

const personalRecordsSchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: true
  },
  weight: {
    type: Number,
    required: false,
  },
  unit: {
    type: String,
    required: false,
  },
})
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  personalRecords: [personalRecordsSchema]
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
