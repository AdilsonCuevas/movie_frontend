"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export function MovieCard({movie}: any) { 
    const router = useRouter();
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <Card
            onClick={() => {
                router.push(`/movie/${movie.id}`);
            }}
            >
            <CardHeader>
                <img src={imageUrl} alt={movie.title} className="movie-poster" />
            </CardHeader>
            <CardContent>
                <CardTitle className="flex justify-between">
                    {movie.original_title}
                    <span className="text-sm font-bold text-gray-500">
                        {movie.popularity}
                    </span>
                </CardTitle>
            </CardContent>
            <CardFooter className="flex justify-between">
                <p> Fecha: {movie.release_date}</p>
                <p> Votos: {movie.vote_count}</p>
            </CardFooter>
        </Card>
    );

}