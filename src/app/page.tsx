
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getMovies } from "./users/users.api";
import { MovieCard } from "./movie-card";
import { LoadMoreButton } from "./ButtonPages";

const PAGE_SIZE = 12;

export const dynamic = "force-dynamic";

async function fetchMovies(page: number) {
  return await getMovies(page, PAGE_SIZE);
}

async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page as string) || 1;
  const movies = await fetchMovies(page);
  var bool = true;

  if (movies.length < PAGE_SIZE) {
    bool = false;
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Quickbet Movies!</h1>
        <Link href="/login" className={buttonVariants()}>
          Iniciar Sesion
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 pt-5">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie: any) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>

      {bool ? (
        <div className="flex justify-center pt-5">
          <LoadMoreButton page={page} />
        </div>
      ) : (
        <p>no more page</p>
      )}
    </div>
  );
}

export default HomePage


