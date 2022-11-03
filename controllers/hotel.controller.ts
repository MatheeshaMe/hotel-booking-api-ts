import { Request, Response,NextFunction } from "express";
import { HotelDocument, IHotel } from '../interfaces/hotels/IHotels.dto';
import { IRooms } from "../interfaces/rooms/IRooms.dto";
import HotelModel from "../models/hotel.model";
import RoomModel from "../models/room.model";
import * as hotelServices from "../services/hotel.services"


export const createHotel = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const savedHotel = await hotelServices.createHotel(req.body);
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const updatedHotel = await hotelServices.updateHotel(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
export const deleteHotel = async (req:Request, res:Response, next:NextFunction) => {
  try {
   const data = await hotelServices.deleteHotel(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
export const getHotelById = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const hotel = await hotelServices.getHotelById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getHotels = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const hotels = await hotelServices.getHotels();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
    res.status(400).json("cannot get hotels");
  }
};

// export const getHotelRooms = async (req:IHotel, res:Response, next:NextFunction) => {
//   const hotelId = req.params.id;
//   console.log(hotelId);

//   try {
//     const hotel = await hotelServices.getHotelRooms(hotelId);
//     const list = await Promise.all(
//       hotel?.rooms && hotel.rooms.map((room:IRooms) => {
//         console.log(room);
//         if (room !== "") {
//           return RoomModel.findById(room);
//         } else {
//           res.status(400).json("there is no rooms");
//         }
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
