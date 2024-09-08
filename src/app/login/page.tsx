"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/authContextt";
import { loginApi } from "../users/users.api";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

function Page() {
    
    const router = useRouter();
    const { login } = useAuthContext();
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (data) => {

        const  response = await loginApi(data);

        if (!response.backendTokens) {
            return console.log("Error");
        }
    
        login(response.backendTokens);
    
        return router.push("/users");

    });

    return (
        <div className="h-screen flex justify-center items-center">
                <Card>
                    <CardHeader>
                        <CardTitle>Iniciar sesion</CardTitle>
                        <CardDescription>asignar las credenciales de su usuario en el campo</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={onSubmit}>
                            <div className="grid w-full items-center gap-4 pt-3">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Username</Label>
                                    <Input type="text" {...register('username')}/>
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-4 pt-3">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">password</Label>
                                    <Input type="password" {...register('passwork')}/>
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <Button>
                                    Login
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
        </div>
    );

}

export default Page;