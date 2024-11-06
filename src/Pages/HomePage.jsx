import { useEffect, useState } from "react";
import ChampionService from "../Services/ChampionService";
import ChampionCard from "../Components/ChampionCard";
import { Container, Form } from "react-bootstrap";

const HomePage = () => {
    const [champions, setChampions] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredChampions, setFilteredChampions] = useState([])

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);
    }

    const fetchChampions = async () => {
        try {
            const response = await ChampionService.getAllChampions();
            const res = Object.entries(response.data.data);
            setChampions(res);
            setFilteredChampions(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchChampions();
    }, [])

    useEffect(() => {
        setFilteredChampions(champions.filter((champion) => {
            return champion[1].name.toLowerCase().includes(searchValue.toLowerCase());
            // return champion[1].name.toLowerCase().startsWith(searchValue.toLowerCase());
        }))
    }, [searchValue])


    return <Container className="d-flex flex-column align-items-center">
        <h1>Champions</h1>
        <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton champion</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Aatrox" value={searchValue} onChange={handleChange}/>
            </Form.Group>
        </Form>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
           {filteredChampions.map((champion) => {
                return <ChampionCard  championCard={champion[1]} key={champion[1].id}/>
            })} 
        </div>
        
    </Container>;
}
 
export default HomePage;