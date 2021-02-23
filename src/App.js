import "./styles.css";
import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import ReactLoading from "react-loading";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

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

  return (
    <div className="loading">
      {isLoading ? <ReactLoading type={"bars"} color={"blue"} /> : <Tours tours={tours} />}
    </div>
  );
}
