"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createUsers, updateUser } from "../users.api";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button'

export function UserForm({user}: any) {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            Lastname: user.Lastname,
            Fistname: user.Fistname,
            username: user.username,
            email: user.email,
            Passwork_hash: user.Passwork_hash
        }
    });
    const router = useRouter();
    const Params = useParams<{id: string}>();

    const onSubmit = handleSubmit(async (data) => {

        if (Params.id){
            await updateUser(Params.id, data);
        }else {
            await createUsers(data);
        }

        router.push("/users");
        router.refresh();
    });
    
    return (
        <form onSubmit={onSubmit}>
            <div className="grid w-full items-center gap-4 pt-3">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nombres</Label>
                    <Input  {...register('Lastname')}/>
                </div>
            </div>
            <div className="grid w-full items-center gap-4 pt-3">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Apellidos</Label>
                    <Input {...register('Fistname')}/>
                </div>
            </div>
            <div className="grid w-full items-center gap-4 pt-3">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Username</Label>
                    <Input  {...register('username')}/>
                </div>
            </div>
            <div className="grid w-full items-center gap-4 pt-3">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input type="email"  {...register('email')}/>
                </div>
            </div>
            <div className="grid w-full items-center gap-4 pt-3">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Contraseña</Label>
                    <Input type="password"  {...register('Passwork_hash')}/>
                </div>
            </div>
            <div className="flex justify-between pt-4">
                <Link href="/users/index" className={ buttonVariants() }>
                    Cancelar
                </Link>
                <Button>
                    { Params.id ? 'Actualizar' : 'Crear' }
                </Button>
            </div>
        </form>
    );
}

