import React, { useState } from "react";
import "./App.css"
const App = () => {
  const [movies, setMovies] = useState([
    { name: "The Godfather", review: "Great movie!", rating: 5 },
    { name: "The Shawshank Redemption", review: "Amazing film!", rating: 5 },
    { name: "The Dark Knight", review: "Awesome movie!", rating: 4 },
  ]);
  const [newMovie, setNewMovie] = useState({ name: "", review: "", rating: "" });
  const [editMovie, setEditMovie] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ name: "", review: "", rating: "" });
  };

  const handleEditMovie = () => {
    const updatedMovies = movies.map((movie, index) => {
      if (index === editMovie) {
        return newMovie;
      }
      return movie;
    });
    setMovies(updatedMovies);
    setNewMovie({ name: "", review: "", rating: "" });
    setEditMovie(null);
  };

  return (
    <div>
      <h2>{editMovie !== null ? "Edit Movie" : "Add Movie"}</h2>
      <input
        type="text"
        name="name"
        value={newMovie.name}
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="review"
        value={newMovie.review}
        placeholder="Review"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        value={newMovie.rating}
        placeholder="Rating"
        onChange={handleInputChange}
      /><br/>
      {editMovie !== null ? (
        <button onClick={handleEditMovie}>Update</button>
      ) : (
        <button onClick={handleAddMovie}>Add Movie</button>
      )}

      <h2>Movie Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Review</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.review}</td>
              <td>{movie.rating}</td>
              <td>
                <button onClick={() => setEditMovie(index)}>Edit</button>
                <button onClick={() => setMovies(movies.filter((m, i) => i !== index))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
