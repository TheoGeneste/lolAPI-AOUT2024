import { useParams } from "react-router-dom";

const ChampionDetailsPage = () => {
    const {id} = useParams();

    return <>
        <h1>Détails page de {id}</h1>
    </>;
}
 
export default ChampionDetailsPage;