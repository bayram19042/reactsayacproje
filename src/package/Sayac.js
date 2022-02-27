import React from 'react'
import CountUp,{useCountUp} from 'react-countup'
import './sayac.css'

const  Sayac= ()=> {
    const countUpRef = React.useRef(null);
    const  {start,pauseResume,reset,update}=useCountUp({start:0,end:50,ref:countUpRef});
  return (
    <div className='sayac'>Sayac
    <div className='kutular'>
        <div className='kutu kutu1'>{<CountUp end={100} duration={2} delay={3}/>}</div>
        <div className='kutu kutu2' ref={countUpRef}>0</div>
        <div className='kutu kutu3'>{<CountUp end={500} duration={1} prefix='&#8378;'/>}</div>
    </div>
    <div className='butonlar'>
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>pauseResume</button>
        <button onClick={reset}>reset</button>
        <button onClick={()=>{update(120)}}>update</button>
        
    </div>
    
    
    </div>
  )
}
export default Sayac;