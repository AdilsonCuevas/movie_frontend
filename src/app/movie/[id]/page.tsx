import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMovie } from "../../users/users.api";
import {buttonVariants} from '@/components/ui/button';
import Link from "next/link";

interface Props {
    params: {
        id: string;
    };
}

async function MovieDetailPage({ params }: Props) {
    const product = await getMovie(params.id);
    const imageUrl = `https://image.tmdb.org/t/p/w500${product.poster_path}`;

    return (
        <div className="flex justify-center items-center h-screen"> 
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        Product Detail: {product.id}
                        <Link
                            className={buttonVariants()}
                            href="/"
                        >
                            Go back
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h1>{product.original_title}</h1>
                    <p>{product.overview}</p>
                    <p>{product.release_date}</p>
                    <p>{product.original_language}</p>
                    <img src={imageUrl} alt={product.title}
                        className="w-full h-64 object-cover"
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default MovieDetailPage;