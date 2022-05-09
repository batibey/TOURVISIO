import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button
} from "reactstrap"

export default function HolidayPackageSearch({ search }) {
  return (
    <>
      <Row className="mt-2">
        <Col>
          <Label> Departure </Label>
          <Input type="select" bsSize="md">
            <option>Amsterdam</option>
            <option>Athens</option>
            <option>Barcelona</option>
            <option>Berlin</option>
            <option>Budapest</option>
            <option>Copenhagen</option>

          </Input>
        </Col>
        <Col>
          <Label> Arrival </Label>
          <Input type="select" bsSize="md">
            <option>Barcelona</option>
            <option>Berlin</option>
            <option>Budapest</option>
            <option>Copenhagen</option>
          </Input>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Label> Check-in</Label>
          <Input type="date" bsSize="md" /></Col>
        <Col>
          <Label> Nights</Label>
          <Input type="select" >
            <option>7</option>
          </Input>
        </Col>
        <Col>
          <Label> Currency</Label>
          <Input type="select" bsSize="md">

            <option>USD</option>
            <option>TRY</option>
            <option>EUR</option>
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
        <Label>
          <Input type="checkbox" />
          Do not show stop sale hotels
        </Label>
        <Button color="primary">SEARCH {search.toUpperCase()}</Button>
      </div>
    </>
  )
}
