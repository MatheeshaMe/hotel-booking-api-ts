import mongoose from 'mongoose';
export interface IHotel {
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: string[];
  title: string;
  desc: string;
  rating: number;
  rooms: string[];
  cheapestPrice: number;
  featured: boolean;
  weLoved?: boolean;
}

export interface HotelDocument extends IHotel,mongoose.Document{
    createdAt:Date,
    updatedAt:Date
}
