import Cookies from "js-cookie";

export async function createUsers(userData: any){
    const tokens = Cookies.get("authTokens");
    const parsedTokens = JSON.parse(tokens);

    const res = await fetch('http://localhost:4000/api/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedTokens.accessToken}`,
        },
        body: JSON.stringify(userData),
    })
    return await res.json();
}

export async function getUsers() {
    const data = await fetch('http://localhost:4000/api/users', {
        cache: "no-store",
    });
    return await data.json();
}

export async function getUser(id: string) {
    const data = await fetch(`http://localhost:4000/api/users/${id}`, {
        cache: "no-store",
    });
    return await data.json();
}

export async function deleteUser(id: string) {
    const tokens = Cookies.get("authTokens");
    const parsedTokens = JSON.parse(tokens);

    const res = await fetch(`http://localhost:4000/api/users/${id}`, {
        method:'DELETE',
        headers: {
            Authorization: `Bearer ${parsedTokens.accessToken}`,
        },
    });
    return await res.json();
}

export async function updateUser(id:string, userData: any){
    const tokens = Cookies.get("authTokens");
    const parsedTokens = JSON.parse(tokens);

    const res = await fetch(`http://localhost:4000/api/users/${id}`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedTokens.accessToken}`,
        },
        body: JSON.stringify(userData),
        cache: "no-store",
    })
    return await res.json()
}

export async  function loginApi(data: any) {
    const res = await fetch('http://localhost:4000/api/auth/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await res.json();
}

export async function getMovies(page: number, pageSize: number) {
    const data = await fetch(`http://localhost:4000/api/movies/popular?page=${page}&pageSize=${pageSize}`, {
        cache: "no-store",
    });
    const movies = await data.json();
    return movies.results;
}

export async function getMovie(id: string) {
    const data = await fetch(`http://localhost:4000/api/movies/${id}`, {
        cache: "no-store",
    });
    return await data.json();
}
