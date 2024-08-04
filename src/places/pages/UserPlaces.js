import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEBJkFS90_vL1EhCQ5bRquRPE20ow_36vTg&s",
    address: "20 W 34th St, New York, NY 10001",
    loaction: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEBJkFS90_vL1EhCQ5bRquRPE20ow_36vTg&s",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 8.93494,
      lng: 38.66379,
    },
    creator: "u2",
  },
];
const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
