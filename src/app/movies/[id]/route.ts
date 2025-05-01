import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id == +id);
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieId = +id;
  const movie = movies.find((m) => m.id == movieId);
  if (!movie) {
    return new Response("Movie not found", { status: 404 });
  }
  try {
    const updatedMovie = await req.json();
    const index = movies.findIndex((m) => m.id == movieId);
    if (!index) {
      return new Response("Movie not found", { status: 404 });
    }
    movies[index] = { ...movie, ...updatedMovie };
    return new Response(JSON.stringify(movies[index]));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to parse JSON" }));
  }
}
