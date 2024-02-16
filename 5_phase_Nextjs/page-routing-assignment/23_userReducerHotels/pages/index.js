import React, { useReducer, useEffect, useState } from "react";

const initialState = { hotels: [], filteredHotels: [] };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, hotels: action.payload };
    case "FILTER":
      return {
        ...state,
        filteredHotels: state.hotels.filter((hotel) =>
          hotel.city.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
}
export default function Home() {
   const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }));
  }, []);

  useEffect(() => {
    dispatch({ type: "FILTER", payload: input });
  }, [input]);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      {state.filteredHotels.map((hotel) => (
        <p key={hotel.hotel_id}>{hotel.hotel_name}</p>
      ))}
    </div>
  );
  }
  