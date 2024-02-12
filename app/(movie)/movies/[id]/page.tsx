const getMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${process.env.NEXT_PUBLIC_GET_MOVIES}/${id}`);
  return response.json();
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}
