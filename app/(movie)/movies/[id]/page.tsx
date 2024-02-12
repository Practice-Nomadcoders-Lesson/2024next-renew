const getMovie = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${process.env.NEXT_PUBLIC_GET_MOVIES}/${id}`);
  return response.json();
};

const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GET_MOVIES}/${id}/videos`
  );
  return response.json();
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");
  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}
