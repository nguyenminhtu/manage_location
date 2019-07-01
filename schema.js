import { gql } from "apollo-server-express";

const schema = gql`
  type Query {
    getLocations(lat: Float, lng: Float, radius: Int): [Location]
  }

  type Mutation {
    addLocation(title: String, lat: Float, lng: Float): Location
  }

  type Location {
    _id: String
    title: String
    location: Coordinate
  }

  type Coordinate {
    coordinates: [Float]
  }
`;

export default schema;
