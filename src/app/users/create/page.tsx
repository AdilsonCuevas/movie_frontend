

import * as React from "react"
import { UserForm } from "./users-form"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {getUser} from "../users.api";

interface Props {
    params: {
        id:string;
    }
}

async function UsersNewPage({params}: Props) {

    const user = await getUser(params.id);

        return (
            <div className="h-screen flex justify-center items-center">
                <Card>
                    <CardHeader>
                        <CardTitle>{params.id ? 'Actualizar usuario':'Create Usuario nuevo'}</CardTitle>
                        <CardDescription>determine la informacion importante para el usuario</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <UserForm user={user}/>
                    </CardContent>
                </Card>
            </div>
            
        )
}

export default UsersNewPage;
