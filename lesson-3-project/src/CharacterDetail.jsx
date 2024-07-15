import axios from "axios";
import { useState } from "react";
import {number} from "prop-types"


const CharacterDetails = (props) => {
    const [id] = useState(props.characterId)
    const [character, setCharacter]= useState([])
    const ts= new Date().getTime()
    
    const response = axios.get('https://gateway.marvel.com/v1/public/characters/'+id+'?&ts='+ts+'&apikey=1db16fa474c3fdf9e74d956d788ea55f&hash=e1c499a5ceb1d8ab8e4afbeb45348103');
    
   


    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
            <ul>
                {character.comics.items.map(comic=> (
                    <li >{comic.name}</li>
                ))}
            </ul>
        </div>
    )
}

CharacterDetails.propType = {
    characterId: number
}

export default CharacterDetails;