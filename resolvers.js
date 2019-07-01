import Location from "./models/Location";

export default {
  Query: {
    getLocations: (_, args) => {
      const { lat, lng, radius } = args;
      const point = {
        type: "Point",
        coordinates: [lng, lat]
      };
      return Location.find({
        location: { $near: { $geometry: point, $maxDistance: radius } }
      });
    }
  },
  Mutation: {
    addLocation: (_, args) => {
      const { title, lat, lng } = args;
      const location = {
        type: "Point",
        coordinates: [lng, lat]
      };
      return Location.create({ title, location });
    }
  }
};
