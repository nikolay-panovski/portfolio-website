import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProjectProperty from './ProjectProperty';

import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
import ProcessingLogo from "icons/processing-1024.png";

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
            <Card.Title>IMT&S Unity Prototype</Card.Title>
              <ProjectProperty icon={<UnityLogo width="48px" height="48px"/>} describerText="Engine" propertyValue="Unity"/>
              <ProjectProperty icon={<img src={ProcessingLogo} alt="Processing 3 logo" width="48px" height="48px"/>} describerText="Engine" propertyValue="Processing"/>
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