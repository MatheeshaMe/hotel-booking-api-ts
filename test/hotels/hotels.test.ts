import request from "supertest";
import app from "../../server";
import mongoose from "mongoose";

beforeEach(async () => {
  await mongoose.connect(
    process.env.MONGO_URL! ||
      "mongodb+srv://travel:travel@travelcluster.nxjdigf.mongodb.net/tstest"
  );
});
afterEach(async () => {
  await mongoose.connection.close();
});

describe("HOTELS", () => {
  it("should return all hotels", async () => {
    const res = await request(app).get("/api/v1/hotels");
    console.log("lenght \n", res.body.length);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
  it("should return a hotel", async () => {
    const res = await request(app).get(
      "/api/v1/hotels/6363df8c72013345a64bed91"
    );
    expect(res.statusCode).toBe(200);
  });
});
