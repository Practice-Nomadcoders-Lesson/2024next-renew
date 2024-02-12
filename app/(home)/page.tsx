export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(process.env.NEXT_PUBLIC_GET_MOVIES);
  const json = await response.json();
  return json;
};

export default async function Page() {
  const movies = await getMovies();

  return (
    <>
      <div>{JSON.stringify(movies)}</div>
    </>
  );
}
