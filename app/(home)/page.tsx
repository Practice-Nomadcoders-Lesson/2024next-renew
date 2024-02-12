import Navigation from "../../components/navigation";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_GET_MOVIES);
  const json = await response.json();
  return json;
};

export default async function Page() {
  const movies = await getMovies();

  return (
    <>
      <Navigation />
      <div>{JSON.stringify(movies)}</div>
    </>
  );
}
