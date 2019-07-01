import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    location: {
      type: { type: String, default: "Point" },
      coordinates: { type: [Number], default: [0, 0] }
    }
  },
  { collection: "locations", timestamps: true }
);

locationSchema.index({ location: "2dsphere" });

const Location = mongoose.model("Location", locationSchema);

export default Location;
