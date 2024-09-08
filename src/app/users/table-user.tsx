"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { deleteUser } from "./users.api"
import { useRouter } from "next/navigation";


export function TableUsers({ Users }: any) {
    const router = useRouter();

    async function removeUser(id: any) {
        await deleteUser(id);
        router.refresh();
    };

    return (
        <Table>
            <TableCaption>Listado de Usuarios</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">username</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Apellido</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Hash</TableHead>
                    <TableHead>fecha creacion</TableHead>
                    <TableHead>Acciones</TableHead>
                    <TableHead>.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Users.map((invoice: any) => (
                    <TableRow key={invoice.id}>
                    <TableCell>{invoice.username}</TableCell>
                    <TableCell>{invoice.Lastname}</TableCell>
                    <TableCell>{invoice.Fistname}</TableCell>
                    <TableCell>{invoice.email}</TableCell>
                    <TableCell>{invoice.Passwork_hash}</TableCell>
                    <TableCell>{invoice.createdAt}</TableCell>
                    <TableCell>
                        <Button className="mt-2" variant="destructive"
                        onClick={(e) => {
                            removeUser(invoice.id);
                        }} > Eliminar </Button>
                    </TableCell>
                    <TableCell>
                        <Button className="mt-2"
                        onClick={(e) => {
                            router.push(`/users/${invoice.id}/edit`);
                        }}> Editar </Button>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}