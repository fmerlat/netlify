import React from 'react';

import CreateLinkQuickAction from './components/CreateLinkQuickAction';
import DataTable from './components/DataTable';

import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <CreateLinkQuickAction></CreateLinkQuickAction>
            <DataTable></DataTable>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
