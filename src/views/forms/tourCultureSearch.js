import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'


function TourCultureSearch() {

    const [nationality, setNationality] = useState(null)
    const [adult, setAdult] = useState(null)
    return (

        <>
            <Input className='mt-2' type="text" bsSize="md" placeholder='Location' />
            <Row>
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

                <Col>
                    <Label>Nationality</Label>
                    <Input value={nationality} onChange={(e) => setNationality(e.target.value)} type="select" bsSize="md">
                        <option>Turkey</option>
                        <option>Australian</option>
                        <option>Canadian</option>
                        <option>English</option>
                        <option>Ethiopian</option>
                        <option>French</option>
                        <option>Italian</option>
                    </Input></Col>
            </Row>
            <Row className='mt-2'>
                <Col><Input value={adult} onChange={(e) => setAdult(e.target.value)} type="select" bsSize="md">
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
        </>
    )
}

export default TourCultureSearch