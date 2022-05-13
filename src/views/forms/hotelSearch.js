import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'
import {Link, useNavigate} from "react-router-dom"
import mdlGetArrivalAutoCompleteRequest from '../../services/mdlGetArrivalAutoCompleteRequest'
import AutoComplete from '@components/autocomplete'


function HotelsSearch({ search, setSearchApi, setError, customer}) {
  const [response, setResponse] = useState(null)
  const [checkin, setCheckin] = useState(``)
  const [checkOut, setCheckOut] = useState(``)
  const [currency, setCurrency] = useState('EUR')
  const [nationality, setNationality] = useState('Germany')
  const [location, setLocation] = useState("")
  const [adult, setAdult] = useState(1)
  const [suggestions, setSuggestions] = useState([])
 
  const navigate = useNavigate()
  useEffect(() => {
    mdlGetArrivalAutoCompleteRequest(location, setResponse, setError, response)

    setSuggestions(response === null ?  [] : response.map((x) => ({ title :  `${x.city.name} , ${x.hotel ? x.hotel.name : ""} ${x.city.name} , ${x.country.name} ` })))
  }, [location])

  const handleSearch = () => {
    
    if (checkin && checkOut && currency && nationality && location && adult && customer) {
      setSearchApi({customer,
        search,
        checkin,
        checkOut,
        currency,
        nationality,
        location,
        adult
      })
      navigate("/hotel-list")
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1000)
    }

  }

  return (
    <>
    <AutoComplete
      filterKey='title'
      suggestionLimit={4}
      suggestions={suggestions}
      className='form-control mt-2'
      value={location} onChange={(e) => setLocation(e.target.value)} placeholder='location : antalya'
      autoFocus 
    />
     
      <Row className='mt-2'>
        <Col>
          <Label> Check-in</Label>
          <Input value={checkin} onChange={(e) => setCheckin(e.target.value)} type="date" bsSize="md" /></Col>
        <Col>
          <Label> Check-out</Label>
          <Input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} type="date" bsSize="md" /></Col>
      </Row>
      <Row className='mt-2'>
        <Col><Input value={currency} onChange={(e) => setCurrency(e.target.value)} type="select" bsSize="md">
          <option>Currency</option>
          <option>USD</option>
          <option>TRY</option>
          <option>EUR</option>
        </Input>
        </Col>
        <Col><Input value={nationality} onChange={(e) => setNationality(e.target.value)} type="select" bsSize="md">
          <option>Nationality</option>
          <option>Australian</option>
          <option>Canadian</option>
          <option>England</option>
          <option>Ethiopian</option>
          <option>French</option>
          <option>Italian</option>
          <option>Germany</option>
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
      <div className='mt-2 d-flex justify-content-between'>
        <Label>
          <Input type="checkbox" />
          Do not show stop sale hotels
        </Label>
        <Button color="primary" onClick={handleSearch}>SEARCH {search.toUpperCase()}</Button>
        
      </div>
    </>
  )
}
export default HotelsSearch
