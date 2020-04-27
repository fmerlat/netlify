import React, { useState } from 'react';

import { Form, InputGroup, InputGroupAddon, Input, Button, Card, CardBody, FormGroup, Label } from 'reactstrap';


export default function CreateLinkQuickAction() {
  const [url, setUrl] = useState('');
  const [customer, setCustomer] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.info('Form submitted', {url, customer});
  }

  return (
    <Card>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="customerName">Customer name</Label>
            <Input
              id="customerName"
              placeholder="EXAMPLE INC."
              value={customer}
              onChange={(e) => {
                setCustomer(e.target.value)
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="targetUrl">URL</Label>
            <InputGroup>
              <Input
                id="http://www.example.com"
                placeholder="Target URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                }}
              />
              <InputGroupAddon addonType="append">
                <Button>Create</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}