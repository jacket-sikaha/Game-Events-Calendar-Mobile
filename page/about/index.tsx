import React from 'react';
import {Text, View} from 'react-native';
import {Container, Row, Col} from 'react-native-flex-grid';

function About() {
  return (
    <View>
      <Container fluid>
        <Row>
          <Col>
            <Text>.col</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>.col</Text>
          </Col>
          <Col>
            <Text>.col</Text>
          </Col>
          <Col>
            <Text>.col</Text>
          </Col>
          <Col>
            <Text>.col</Text>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Text>.col-3</Text>
          </Col>
          <Col xs="auto">
            <Text>.col-auto - variable width content</Text>
          </Col>
          <Col xs="3">
            <Text>.col-3</Text>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Text>.col-6</Text>
          </Col>
          <Col xs="6">
            <Text>.col-6</Text>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            <Text>.col-6 .col-sm-4</Text>
          </Col>
          <Col xs="6" sm="4">
            <Text>.col-6 .col-sm-4</Text>
          </Col>
          <Col sm="4">
            <Text>.col-sm-4</Text>
          </Col>
        </Row>
        <Row>
          <Col sm={5} smOrder={2} smOffset={1}>
            <Text>.col-sm-5 .order-sm-2 .offset-sm-1</Text>
          </Col>
          <Col sm={5} smOrder={1} smOffset={1}>
            <Text>.col-sm-5 .order-sm-1 .offset-sm-1</Text>
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3} sm={12}>
            <Text>.col-sm-12 .col-md-6 .offset-md-3</Text>
          </Col>
        </Row>
        <Row>
          <Col sm="auto" smOffset={1}>
            <Text>.col-sm-auto .offset-sm-1</Text>
          </Col>
          <Col sm="auto" smOffset={1}>
            <Text>.col-sm-auto .offset-sm-1</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={(3 / 7) * 12} xsOffset={(2 / 7) * 12} className="bg-red-500">
            <Text>.111111111</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={(6 / 7) * 12} xsOffset={(0 / 7) * 12} className="bg-red-500">
            <Text>.111111111</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={(2 / 7) * 12} xsOffset={(1 / 7) * 12} className="bg-red-500">
            <Text>.111111111</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={(7 / 7) * 12} xsOffset={(0 / 7) * 12} className="bg-red-500">
            <Text>.111111111</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={(1 / 7) * 12} xsOffset={(1 / 7) * 12} className="bg-red-500">
            <Text>.111111111</Text>
          </Col>
          <Col xs={(2 / 7) * 12} xsOffset={(2 / 7) * 12} className="bg-red-500">
            <Text>.111111111</Text>
          </Col>
        </Row>
      </Container>
    </View>
  );
}

export default About;
