import React from 'react'
import { Card, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, UncontrolledCarousel } from 'reactstrap'

export default function SliderHome() {
  return (
    <Card style={{ borderRadius:"10px", overflow:"hidden"}}>
    <div class="carousel-item active">
      <img src="https://i.cnnturk.com/i/cnnturk/75/740x416/57fcd784ac1fe32accfe3e11.png" class="d-block w-100" alt="..."/>
    </div>
    </Card>
  )
}