import React from 'react'
import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import './Slider.css';


const ImageSlider = ({imageurls}) => {
    const [imageIndex, setImageIndex ] = useState(0);

    function showNextImage(){
      setImageIndex(index => {
        if(index === imageurls.length - 1) return 0
      return index + 1
      })
    }

    function showPrevImage(){
      setImageIndex(index => {
        if(index === 0) return imageurls.length - 1
      return index - 1
      })
    }
  return (
    <div style={{width:"100%", height:"100%", position:"relative"}}>
      <div style={{width:"100%", height:"100%", display:"flex", overflow:"hidden"}}>
        {imageurls.map(url => (
          <img key={url} src={url} className='img-slider-img' style={{translate:`${-100 * imageIndex}%`}}/>
        ))}
      
      </div>
      <button onClick={showPrevImage} className='img-slider-btn' style={{left:0}}><ArrowBigLeft/></button>
      <button onClick={showNextImage} className='img-slider-btn' style={{right:0}}><ArrowBigRight/></button>
      <div style={{position:"absolute",bottom:".5rem",left:"50%",translate:"-50%", display:"flex", gap:".25rem",}}>
        {imageurls.map((_,index) => (
          <button key={index} className='img-slider-dot-btn' onClick={()=> setImageIndex(index)}>{index === imageIndex ? <CircleDot/> : <Circle/>}</button>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider