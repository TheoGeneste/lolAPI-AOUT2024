import { Container, Form } from "react-bootstrap";
import ItemService from "../Services/ItemService";
import { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";

const ItemsPage = () => {
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredItems, setFilteredItems] = useState([])

    const handleChange = (event) =>{
        setSearchValue(event.currentTarget.value);   
    }

    const fetchItems = async () => {
        try {
            const response = await ItemService.getAllItems();
            
            const res =  Object.entries(response.data.data);
            res.sort((a,b) => {
               return a[1].name.localeCompare(b[1].name);
            })
            // response.data.data.sort((a, b) => a.name.localeCompare(b.firstname))
            setItems(res);
            setFilteredItems(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchItems();
    }, [])

    useEffect(()=>{
        setFilteredItems(items.filter((item) => {
            return item[1].name.toLowerCase().includes(searchValue.toLowerCase());
            // return item[1].name.toLowerCase().startsWith(searchValue.toLowerCase());
        }))
    }, [searchValue])

    return  <Container className="d-flex flex-column align-items-center">
        <h1>Items :</h1>
        <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton Item</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Bottes" value={searchValue} onChange={handleChange}/>
            </Form.Group>
        </Form>
        <div className="d-flex flex-wrap gap-5">
            {filteredItems.map((item) => {
                return <ItemCard itemCard={item[1]} key={item[0]} />
            })}
        </div>
        
    </Container>;
}
 
export default ItemsPage;