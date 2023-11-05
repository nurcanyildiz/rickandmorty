import React, {useState, useEffect} from 'react'
import SearchInput from "./components/serchInput";
import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";

let url = "https://rickandmortyapi.com/api/character";
let nextUrl = null;
let prevUrl = null;

function App() {
    const [characters, setCharacters] = useState([]);

    const fetchCharacterData = (url) => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                nextUrl = data.info.next;
                prevUrl = data.info.prev;
                setCharacters(data.results)
            })
            .catch(error =>
                console.error('Error fetching character data:', error)
            );
    };
    useEffect(() => {
        fetchCharacterData(url);
    }, []);

    return (
        <div className="App">
            <Logo/>
            <SearchInput/>
            <Cards characters={characters} />
            <Buttons nextUrl={nextUrl} prevUrl={prevUrl} fetchCharacterData={fetchCharacterData}/>
        </div>
    );
}

export default App;
