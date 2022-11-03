import { Router } from "express";
import * as hotelController from "../controllers/hotel.controller";

const hotelRouter = Router();

hotelRouter.get("/", hotelController.getHotels);
hotelRouter.post("/", hotelController.createHotel);
hotelRouter.put("/:id", hotelController.updateHotel);
hotelRouter.delete("/:id", hotelController.deleteHotel);
hotelRouter.get("/:id", hotelController.getHotelById);

export default hotelRouter;
