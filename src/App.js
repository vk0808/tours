import "./styles.css";
import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import ReactLoading from "react-loading";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id )
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (tours.length === 0) {
    return (
      <main>
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>refresh</button>
      </main>
    );
  }
  return (
    <div className="loading">
      {isLoading ? <ReactLoading type={"bars"} color={"blue"} /> : <Tours tours={tours} removeTour={removeTour} />}
    </div>
  );
}
