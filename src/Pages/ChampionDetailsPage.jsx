import { useParams } from "react-router-dom";
import ChampionService from '../Services/ChampionService';
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const ChampionDetailsPage = () => {
    const {id} = useParams();
    const [champion, setChampion] = useState({});

    const fetchChampionById = async () => {
        try {
            const response = await ChampionService.getChampionById(id);
            console.log(response.data.data[id]);
            setChampion(response.data.data[id]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchChampionById();
    }, [])    

    return <Container className="d-flex flex-column align-items-center">
        <h1>{id}</h1>
        <img src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+ id +"_0.jpg"} alt="" />
        <h2>Lore :</h2>
        <p>{champion.lore}</p>
        <div className="d-flex mt-3">
            <div className="col-6">
                <h2>Conseil pour les alliés</h2>
                <ul>
                   {champion.allytips && champion.allytips.map((tip) =>{
                        return <li key={tip}>{tip}</li>
                    })} 
                </ul>
            </div>
            <div className="col-6">
                <h2>Conseil pour les ennemis</h2>
                <ul>
                   {champion.enemytips && champion.enemytips.map((tip) =>{
                        return <li key={tip}>{tip}</li>
                    })} 
                </ul>
            </div>
        </div>
        <h2>Infos</h2>
        <ul>
            <li>Attaque : {champion.info != undefined && champion.info.attack}</li>
            <li>Défense : {champion.info && champion.info.defense}</li>
            <li>Difficulté : {champion.info && champion.info.difficulty}</li>
            <li>Magie : {champion.info && champion.info.magic}</li>
        </ul>
        <h2>Passif :</h2>
        {champion.passive &&  <>
            <h3>{champion.passive.name}</h3>
            <div className="d-flex">
                <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/"+champion.passive.image.full} alt="" />
                <p>{champion.passive.description}</p>
            </div>
        </>}
        {champion.spells && champion.spells.map((spell) => {
            return <>
                <h3>{spell.name}</h3>
                 <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/"+spell.image.full} alt="" />
                 <p>{spell.description}</p>
            </>
        })}

        {champion.stats && Object.entries(champion.stats).map((key) => {
            console.log(key);
            
            return <span>{key[0]} ={">"} {key[1]}</span>
        })}
    </Container>;
}
 
export default ChampionDetailsPage;