import slide_1 from './slide_1.jpeg'
import slide_2 from './slide_2.jpeg'
import slide_3 from './slide_3.jpeg'
import slide_4 from './slide_4.jpeg'
import slide_5 from './slide_5.jpeg'
import slide_6 from './slide_6.jpeg'
import React from 'react'
import ImageSlider from './ImageSlider'


const Images = [slide_1,slide_2,slide_3,slide_4,slide_5,slide_6];

const Slider1 = () => {
  return (
    <div style={{maxWidth:'1200', width:'100%', aspectRatio:'10/4.2', margin:'0 auto'}}>
    <ImageSlider imageurls={Images}/>
    </div>
  )
}

export default Slider1