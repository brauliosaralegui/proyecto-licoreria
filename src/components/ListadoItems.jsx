import { collection, getDocs,getFirestore } from "firebase/firestore"
import { useEffect } from "react"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function ListadoItems() {

  useEffect(() => {
    const db=getFirestore();
    const itemCollection = collection (db,"mercaderia")
    getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>console.log(docu.data())))


  },[])


  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 5 }).map((docu, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src=" " />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ListadoItems
