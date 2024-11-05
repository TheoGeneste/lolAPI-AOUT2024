import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({itemCard}) => {
    const navigate = useNavigate();

    const navigateTo = (name) => {
        navigate("/item/"+name, {state : {item : itemCard}})
    }

    
    return <>
        <Card style={{ width: '18rem' }} onClick={() => {navigateTo(itemCard.name)}}>
        <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+itemCard.image.full} />
        <Card.Body>
            <Card.Title>{itemCard.name}</Card.Title>
            <Button variant="primary">Voir plus</Button>
        </Card.Body>
        </Card>
    </>;
}
 
export default ItemCard;