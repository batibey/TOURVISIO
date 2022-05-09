import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'

export default function ReservationSearch() {
  return (
    <>
      <Card >
        <CardHeader>
          <CardTitle>RESERVATION SEARCH</CardTitle>
        </CardHeader>
        <CardBody>
          <Row >
            <Col>
              <Label className='form-label'>
                Reservation Number
              </Label>
              <Input type='text' id='res-number' placeholder='101010' autoFocus />
            </Col>
            <Col>
              <Label className='form-label'>
                PNR
              </Label>
              <Input type='text' id='pnr-number' placeholder='101010' autoFocus />
            </Col>
            <Col>
              <Label className='form-label'>
                GDS-PNR
              </Label>
              <Input type='text' id='gds-number' placeholder='101010' autoFocus />
            </Col>
            <Col>

              <Button className='mt-2' color="primary">SEARCH</Button>
            </Col>
          </Row>

        </CardBody>
      </Card>
    </>
  )
}
