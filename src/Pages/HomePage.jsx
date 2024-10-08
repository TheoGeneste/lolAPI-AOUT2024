import { useEffect, useState } from "react";
import ChampionService from "../Services/ChampionService";
import ChampionCard from "../Components/ChampionCard";
import { Container } from "react-bootstrap";

const HomePage = () => {
    const [champions, setChampions] = useState({});

    const fetchChampions = async () => {
        try {
            const response = await ChampionService.getAllChampions();
            setChampions(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchChampions();
    }, [])

    return <Container className="d-flex flex-column align-items-center">
        <h1>Champions</h1>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
           {Object.entries(champions).map((champion) => {
                return <ChampionCard  championCard={champion[1]} key={champion[1].id}/>
            })} 
        </div>
        
    </Container>;
}
 
export default HomePage;