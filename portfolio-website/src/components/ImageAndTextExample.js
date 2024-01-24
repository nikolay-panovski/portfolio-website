import { Card } from 'reactstrap';
import { CardBody, CardTitle, CardText } from 'reactstrap';
import { Col } from 'reactstrap';
import { Row } from 'reactstrap';

import ProjectProperty from './ProjectProperty';
import ProjectPropertyExpandable from './ProjectPropertyExpandable';

import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
import { ReactComponent as CSLogo } from "icons/Logo_C_sharp.svg";
import ProcessingLogo from "icons/processing-1024.png";

function ImageAndTextExample() {
  return (
    <>
      <Card className="d-flex" style={{margin: "1rem 15%"}}>
        <Row>
          <Col xs="4">  {/* out of 12 as the 100% */}
            <div style={{width:"100%", height:"100%", backgroundImage:"url(logo512.png)", backgroundPosition:"center", backgroundSize:"cover"}} ></div>
          </Col>
          <Col>
            <CardBody>
              <CardTitle className="h3">IMT&S Unity Prototype</CardTitle>
              <ProjectProperty icon={<UnityLogo width="36px" height="36px"/>} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<UnityLogo width="36px" height="36px"/>} propertyValue="Individual"/>
              <div className="d-flex flex-row flex-wrap justify-content-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="36px" height="36px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="36px" height="36px"/>} propertyValue="C#"/>
              </div>
              
              <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ImageAndTextExample;