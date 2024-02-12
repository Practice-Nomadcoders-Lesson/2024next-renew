const getMovie = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${process.env.NEXT_PUBLIC_GET_MOVIES}/${id}`);
  return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <>
      <h6>{JSON.stringify(movie)}</h6>
    </>
  );
}
