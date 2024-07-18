import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {

    const isToggleOn = useSelector((state)=>state.chicloom.isToggleOn)
  return (
    <div>
<p className={` ${isToggleOn ? 'text-cyan-200' : 'text-black'}  text-center text-base slide-in-left`}>At ChicLoom, we believe that fashion is an expression of individuality and confidence. Our curated collection features an array of stunning designs, from timeless classics to the latest trends, ensuring that you find the perfect outfit for any occasion.<br/> Whether you're stepping into the office, heading out for a night on the town, or enjoying a casual day out, our pieces are crafted to make you feel stylish and empowered every day. Discover your unique style and elevate your wardrobe with ChicLoom – where fashion meets passion. Happy shopping!</p>
<div className='fade-in'>
  This text will fade in.
</div>

<div className='slide-in'>
  This text will slide in from the bottom.
</div>

<div className='zoom-in'>
  This text will zoom in.
</div>

<div className='rotate-in'>
  This text will rotate in.
</div>

<div className='slide-in-left'>
  This text will slide in from the left.
</div>

<div className='slide-in-right'>
  This text will slide in from the right.
</div>
<div className='bounce-in'>
  This text will bounce in.
</div>

<div className='flip-in-x'>
  This text will flip in along the X-axis.
</div>

<div className='light-speed-in'>
  This text will slide in with light speed.
</div>

<div className='roll-in'>
  This text will roll in.
</div>

<div className='shake'>
  This text will shake.
</div>


    </div>
  )
}

export default About