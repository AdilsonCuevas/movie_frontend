

import Link from 'next/link';
import { TableUsers } from './table-user'
import { getUsers } from "./users.api"
import { buttonVariants } from '@/components/ui/button';

export const dynamic = "force-dynamic";

async function UserIndexPage() {
    const Users = await getUsers();

        return (
            <>
                <div className="flex justify-between">
                    <h4 className="text-4xl fount-bold">
                        Listado de usuarios
                    </h4>
                    <Link href="/users/create" className={buttonVariants()} >
                        Crear  nuevo Usuario
                    </Link>

                    <Link href="/logout" className="" >
                        Logout
                    </Link>
                </div>
                <div className="pt-15">
                    <TableUsers Users={Users}/>
                </div>
            </>
        )
}

export default UserIndexPage