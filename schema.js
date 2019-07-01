import { gql } from "apollo-server-express";

const schema = gql`
  type Query {
    getLocations(lat: String, lng: String, radius: String): [Location]
  }

  type Mutation {
    addLocation(title: String, lat: String, lng: String): Location
  }

  type Location {
    title: String
    lat: Float
    lng: Float
  }
`;

export default schema;
