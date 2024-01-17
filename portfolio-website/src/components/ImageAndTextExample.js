import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ImageAndTextExample() {
  return (
    <>
      <Card className="d-flex" style={{margin: "0 15%"}}>
        <Row>
          <Col xs={4}>  {/* out of 12 as the 100% */}
            <Card.Img src="logo512.png" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ImageAndTextExample;