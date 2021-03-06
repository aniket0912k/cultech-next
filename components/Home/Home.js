import { Row, Col, Card, CardBody, Button, CardTitle } from "reactstrap";
import Router from "next/router";

import Rules from "./Rules";
import CarouselComp from "./Carousel";
import Details from "./Details";

const Home = props => {
  return (
    <div className="homepage">
      <section className="homepage-photos row">
        <Col>
          <CarouselComp />
        </Col>
      </section>
      <Row className="home-fullpage">
        <Col sm={10} className="m-auto">
          <h1 className="display-4 text-success text-center">CulTech 2020</h1>
          <div className="lead text-center">
            Come and witness the ir-resist-able
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <Details question="Where ?" answer="ECE Department" />
        </Col>
        <Col md="6">
          <Details question="When" answer="19-20 March, 2020" />
        </Col>
      </Row>

      <Row className="mt-4" id="more">
        <Col sm={10} className="m-auto">
          <h4 className="text-success">What is it?</h4>
          <p>
            Cultech is the Cultural and Technical fest organised by INTEC
            society annually. INTEC is the official society representing ECE
            department in DCRUST Murthal.
          </p>
        </Col>

        <Col sm={10} className="m-auto">
          <h4 className="text-success">Rules common to all</h4>
          <Rules />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col sm={10} className="m-auto mt-3 ">
          <Card color="light">
            <CardBody>
              <CardTitle>Want to enroll in events?</CardTitle>
              <Button
                color="success"
                size="sm"
                outline
                onClick={() => {
                  Router.push("/events");
                }}
              >
                Click here
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
