import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(process.env.NEXT_PUBLIC_GET_MOVIES);
  const json = await response.json();
  return json;
};

export default async function Page() {
  const movies = await getMovies();

  return (
    <>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
}
