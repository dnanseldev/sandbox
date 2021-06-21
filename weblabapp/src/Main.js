import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import User from './components/user';
import axios  from 'axios';


export default function Main()
{
    const [names, setName] = useState([{
        id: '',
        name: '',
        state: false
    }])

    const pkm_url = 'https://pokeapi.co/api/v2/pokemon/1'

    const GetPokemons = async () => {
        try
        {
            const response = await axios.get(pkm_url)
           // console.log(response.data.name)
            setName([...names,{ id: uuidv4(),name: response.data.name, state: true }])
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(()=>{

        console.log(names);
    }, [names])

    const hdlClick = evt => {

        evt.preventDefault()
        GetPokemons()        
    }
     
    const Pokemon = props => <p>{props.id} {props.pok_name}</p>

    return(
        <div className="Main">
              <h1>Testing</h1>

              <button onClick={ e => hdlClick(e)}>Click</button>              

              {names.map(name => (
                  name ? <Pokemon key={name.id} id={name.id} pok_name={name.name}/> : ''
              ))}
        </div>
    )
} 