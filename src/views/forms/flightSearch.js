import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'

function FlightSearch({ search }) {
    return (
        <>
            <Row className='mt-2'>
                <Col>
                    <Input type="text" bsSize="md" placeholder='Departure' />
                </Col>
                <Col>
                    <Input type="text" bsSize="md" placeholder='Arrival' />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Label> Check-in</Label>
                    <Input type="date" bsSize="md" /></Col>
                <Col>
                    <Label> Check-out</Label>
                    <Input type="date" bsSize="md" /></Col>
            </Row>
            <Row className='mt-2'>
                <Col><Input type="select" bsSize="md" placeholder='Flight Class'>
                    <option>All</option>
                    <option>Business</option>
                    <option>Economy</option>
                </Input>
                </Col>
                <Col><Input type="select" bsSize="md" placeholder='Currency'>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>TRY</option>
                </Input></Col>
            </Row>
            <Row className='mt-2'>
                <Col><Input type="select" bsSize="md">
                    <option>Adult</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Input>
                </Col>
                <Col><Input type="select" bsSize="md">
                    <option>Child (2-12)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Input>
                </Col>
                <Col><Input type="select" bsSize="md">
                    <option>Infant (0-2)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Input>
                </Col>
                <Col><Input type="select" bsSize="md">
                    <option>Other</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Input>
                </Col>
            </Row>
            <div className='mt-2 d-flex justify-content-between'>
                <Label>
                    <Input type="checkbox" />
                    Non-Stop Flight Only
                </Label>
                <Button color="primary">SEARCH {search.toUpperCase()}</Button>
            </div>
        </>
    )
}
export default FlightSearch
