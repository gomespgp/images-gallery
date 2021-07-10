import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = (props) => {
  const { handleSubmit, word, setWord } = props;
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9} md={9} lg={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image..."
                />
              </Col>
              <Col xs={3} md={3} lg={3}>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
