import React from "react"
import './header.css'

import { useState, useEffect } from 'react'


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Header({newinput}){
  const [Apiname,setApiname]=useState({data:""})
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }



  function handleinputChange(e) {
    

    e.preventDefault();

    setApiname( { ...Apiname,data: e.target.value} )
    
    console.log(Apiname.data,"cccc")
    
}

  function handleFormSubmit(e) {
    e.preventDefault();


    newinput(Apiname.data)
    console.log(Apiname.data,"dddd")
 
    setApiname({ data: "" 
       
    })
 
  
}

  
 

return(


<div className="main">
  <div className="navbar">
    <div className="icon">
      <h2 className="logo">BaraNi</h2>
    </div>
    <div className="menu">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">SERVICE</a></li>
        <li><a href="#">DESIGN</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
    <div className="search">
      <input className="srch"  value={Apiname.data}  type="search" name placeholder="Type To text " onChange={handleinputChange}/>
      <a href="#"> <button className="btn" onClick={handleFormSubmit}>Search</button></a>
 
     
    </div>
  </div> 
  {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
  <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <h1>{note}</h1>
        
</div>




)
   







}
export default Header