import React,{useRef,useEffect} from 'react'
import './Transition.css'
import{Power4} from 'gsap'

export default function Transition({timeline}) {
    const trans= useRef(null)
    useEffect(()=>{
        timeline.to(trans.current,{
            duration:1.5,
            x:1800,
            ease:Power4.easeOut,
            display:'none',
         
        
        });
      
    })
  return (
    <div>
        <div className='transition-effect' ref={trans}></div>
        
        </div>
  )
}
