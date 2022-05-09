import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'

function ExcursionSearch({ search }) {
    return (
        <>

            <Input className='mt-2' type="text" bsSize="md" placeholder='Location' />
            <Row className='mt-1'>
                <Col>
                    <Label> Check-in</Label>
                    <Input type="date" bsSize="md" /></Col>

                <Col>
                    <Label> Check-out</Label>
                    <Input type="date" bsSize="md" /></Col>

                <Col>
                    <Label> Currency</Label>
                    <Input type="select" bsSize="md" placeholder='Flight Class'>
                        <option>EUR</option>
                        <option>USD</option>
                        <option>TRY</option>
                    </Input>
                </Col>
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
                <Label />
                <Button color="primary">SEARCH {search.toUpperCase()}</Button>
            </div>

        </>
    )
}

export default ExcursionSearch