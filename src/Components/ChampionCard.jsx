import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function ChampionCard({championCard}) {
    const navigate = useNavigate();

    const navigateTo = (id) => {
        navigate("/champion/"+id);
    }

  return (
    <Card style={{ width: '18rem' }} onClick={() => {navigateTo(championCard.id)}}>
      {/* <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+ championCard.id +"_0.jpg"} /> */}
      {/* <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/"+ championCard.id +".png"} /> */}
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+ championCard.id +"_0.jpg"} />
      <Card.Body>
        <Card.Title>{championCard.name}</Card.Title>
        <Card.Text>
          {championCard.title}
        </Card.Text>
        <Button variant="primary">Voir plus</Button>
      </Card.Body>
    </Card>
  );
}

export default ChampionCard;