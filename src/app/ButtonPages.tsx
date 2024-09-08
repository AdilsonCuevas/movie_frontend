

"use client";

import { useState } from 'react';
import React from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export function LoadMoreButton({ page }: { page: number }) {
    const router = useRouter();
    const [loading, setLoading] =useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [movies, setMovies] = useState<any[]>([]);
    const nextPage = page + 1;
    
        return (
        <>
            {loading ? (
            <p>Loading...</p>
            ) : hasMore ? (
                <Button className="mt-2"
                        onClick={(e) => {
                            router.push(`?page=${nextPage}`);
                }}> Siguiente Pagina </Button>
            ) : (
            <p>No more movies</p>
            )}
        </>
    );
}