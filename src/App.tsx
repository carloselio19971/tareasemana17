import { useEffect, useState } from "react"
import { SearchInput } from "./Components/SearchInput"
import { UserList } from "./Components/UserList"
import axios from "axios"

export const App = () => {
  const [users, setUsers]= useState([]);

  const createUser = async (inputName:string)=>{
    const infoUser = {
      id:String(new Date().getMilliseconds()),
      name:inputName
    }
    try {
     const response = await axios.post('http://localhost:3000/users', infoUser)
     if(response.status===201){
      setUsers([...users,response.data])
     }
     console.log(response);
    }
    catch (error){

    }

  }

const readUsers = async () =>{
  try{
    const {data}= await axios.get('http://localhost:3000/users')
    setUsers(data);
  }
  catch(error){
    console.log(error);
  }
}

useEffect(()=>{
  readUsers();
},[]);


const deleteUser = async (userId: string) => {
  try {
    await axios.delete(`http://localhost:3000/users/${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  } catch (error) {
    console.log(error);
  }
};


  return (
    <main className="contenedor-principal">
      <header>
              <h1>CRUD USERS PACHACUTEC</h1>
      </header>
      <SearchInput createUser={createUser} />
      <UserList users={users} onDelete={deleteUser} />
    </main>
  )
}


