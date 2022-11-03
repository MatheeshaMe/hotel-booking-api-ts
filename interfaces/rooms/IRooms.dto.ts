import mongoose from "mongoose";
export interface IRoomNumbers {
  number: number;
  unavailableDates: Date[];
}

export interface IRooms {
  images: string[];
  desc: string[];
  isHourlyAvailable: boolean;
  hourlyPrice: number;
  recipie: string[];
  view: string[];
  roomFacilities: string[];
  roomNumbers: IRoomNumbers;
}

export interface RoomsDocument extends IRooms, IRoomNumbers, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
