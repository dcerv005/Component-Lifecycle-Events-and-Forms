import axios from "axios";
import { useState, useEffect } from "react";
import {number} from "prop-types"


const CharacterDetails = (props) => {
    const [id] = useState(props.characterId)
    const [character, setCharacter]= useState(null)    
    
    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=1db16fa474c3fdf9e74d956d788ea55f&hash=e1c499a5ceb1d8ab8e4afbeb45348103`);
                console.log(response.data.data.results[0])
                setCharacter(response.data.data.results[0])
                
            } catch (error) {
                console.error('Error fetching products', error)
            }
        };
        fetchData();
    }, [id]);

    if (!character) {
        return <div> Loading... </div>
    }

    
   

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
            <ul>
                {character.comics.items.map((comic, index)=> (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
            <br />
        </div>
    )
}

CharacterDetails.propTypes = {
    characterId: number.isRequired
}

export default CharacterDetails;
