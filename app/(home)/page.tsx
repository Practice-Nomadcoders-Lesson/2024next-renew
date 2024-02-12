"use client";

import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_GET_MOVIES);
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Navigation />
      <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>
    </>
  );
}
