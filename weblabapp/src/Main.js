import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import User from './components/user';


export default function Main()
{

    const hdlClick = evt => {

        evt.preventDefault()

        const fnc = async () => {

            return 'Hello there :)'
        } 

        console.log(fnc())
    }
     
    return(
        <div className="Main">
              <h1>Testing</h1>

              <button onClick={ e => hdlClick(e)}>Click</button>
        </div>
    )
} 