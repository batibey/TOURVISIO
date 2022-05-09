import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'
import Select from 'react-select'

export default function VisaSearch({ search}) {

    const colourOptions = [
        { value: 'ocean', label: 'Ocean' },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' }
      ]
  return (
    <>
    <Row className='mt-1'>
        <Col> <Label className='form-label'>Country</Label>
            <Select
              className='react-select'
              classNamePrefix='select'
              options={colourOptions}
              isClearable={false}
            /></Col>
        <Col> <Label className='form-label' >
        Checkin Date
      </Label>
      <Input
      type='date'
        className='form-control'
       
      /></Col>
        <Col><Label className='form-label'>Currency</Label><Input type="select" bsSize="md">
-          <option>USD</option>
          <option>TRY</option>
          <option>EUR</option>
        </Input></Col>
    </Row>
    <Row className='mt-1'>
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
    </Row>
    <div className='mt-2 d-flex justify-content-end'>
        <Button color="primary" >SEARCH {search.toUpperCase()}</Button>
        
      </div>


    </>
  )
}
