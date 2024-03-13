import { Users } from "../UserList"

export interface Iprops{
    user:Users;
    onDelete: (userId: string) => void;
  }

export const User = ({user,onDelete}:Iprops) => {


  const handleDelete =() => {
    onDelete(user.id);
}

  return (
    <article className="item-usuario" onClick={handleDelete} >{user.name} <button style={{color:"red", backgroundColor:"white", width:"20px"}}>X</button><button style={{ backgroundColor:"white", width:"100px"}}>Actualizar</button></article>
  )
}

