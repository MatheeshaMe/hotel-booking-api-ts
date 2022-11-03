import mongoose from "mongoose";
import { RoomsDocument } from "../interfaces/rooms/IRooms.dto";

const roomShcema = new mongoose.Schema(
  {
    images: {
      type: [String],
      required: true,
    },
    desc: {
      type: [String],
      required: true,
    },

    isHourlyAvailable: {
      type: Boolean,
    },
    hourlyPrice: {
      type: Number,
    },
    recipie: {
      type: [String],
    },
    view: {
      type: [String],
    },
    roomFacilities: {
      type: [String],
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: {
          type: [Date],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const RoomModel = mongoose.model<RoomsDocument>("Room", roomShcema);

export default RoomModel;
