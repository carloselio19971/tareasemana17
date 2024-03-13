import { useState } from 'react';
import './SearchInput.css';

export interface Iprops{
  createUser:(inputName:string)=> void;
}


export const SearchInput = ({createUser}:Iprops) => {

  const [inputName, setInputName] = useState<string>('');
  

  return (
        <section className='SearchInput'>
          <article className='SearchInput-Container'>
            <div>
              <input onChange={(e)=>setInputName(e.target.value)} type="text" placeholder="Enter some name"/>
            </div>
            <div>
              <button onClick={()=>createUser(inputName)} disabled={!inputName} type="button">+Add</button>
            </div>
          </article>
        </section>
  )
}


