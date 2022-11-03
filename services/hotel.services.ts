import HotelModel from "../models/hotel.model";
import RoomModel from "../models/room.model";
import { IHotel } from "../interfaces/hotels/IHotels.dto";
import { IRooms } from "../interfaces/rooms/IRooms.dto";

export const createHotel = async (hotel: IHotel) => {
  const newHotel = new HotelModel({...hotel});
  try {
    const savedHotel = await newHotel.save();
    return savedHotel;
  } catch (error) {
    return error;
  }
};

export const updateHotel = async (id: string, hotel: IHotel) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      id,
      { $set: hotel },
      { new: true }
    );
    return updatedHotel;
  } catch (error) {
    return error;
  }
};
export const deleteHotel = async (id: string) => {
  try {
    await HotelModel.findByIdAndDelete(id);
    return "Hotel has been deleted";
  } catch (error) {
    return error;
  }
};
export const getHotelById = async (id: string) => {
  try {
    const hotel = await HotelModel.findById(id);
    return hotel;
  } catch (error) {
    return error;
  }
};
export const getHotels = async () => {
  try {
    const hotels = await HotelModel.find();
    return hotels;
  } catch (error) {
    return error;
  }
};

// export const getHotelRooms = async (ihotelId:string) => {
//   const hotelId = ihotelId;
//   console.log(hotelId);

//   try {
//     const hotel = await HotelModel.findById(hotelId);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         console.log(room);
//         if (room !== "") {
//           return RoomModel.findById(room);
//         } else {
//           return "there is no rooms";
//         }
//       })
//     );
//     return list
//   } catch (err) {
//     return err
//   }
// };
