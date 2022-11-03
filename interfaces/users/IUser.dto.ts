import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  country: string;
  city: string;
  img: string;
  phone: number;
  password: string;
  isAdmin: boolean;
}

export interface UserDocument extends IUser, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
