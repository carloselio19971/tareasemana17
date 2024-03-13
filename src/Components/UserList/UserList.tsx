import { User } from "../User/User";

export interface Users{
  id:string,
  name:string
}

export interface UserListProps {
  users:Users[];
  onDelete: (userId: string) => void;
}
export const UserList = ({users,onDelete}:UserListProps) => {
  return (
    <section>
     {
        users.map((user) =>(
          <User key={user.id} user={user} onDelete={onDelete} />
          // <article key={user.id} >{user.name}</article>
        ))
     }
     
    </section>
  )
}

