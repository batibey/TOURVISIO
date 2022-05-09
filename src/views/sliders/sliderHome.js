import React from 'react'
import { Card, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, UncontrolledCarousel } from 'reactstrap'

export default function SliderHome() {
  return (
    <Card style={{ borderRadius:"10px", overflow:"hidden"}}>
       <UncontrolledCarousel 
  items={[
    {
   
      key: 1,
      src: 'https://i.cnnturk.com/i/cnnturk/75/740x416/57fcd784ac1fe32accfe3e11.png'
    },
    {
     
      key: 2,
      src: 'https://i.cnnturk.com/i/cnnturk/75/740x416/611baec05cf3b019acee1e69.jpg'
    },
    {
      
      key: 3,
      src: 'https://i.cnnturk.com/i/cnnturk/75/740x416/563733bba781b82b709b0b79.jpg'
    }
  ]}
 />
    </Card>
  )
}