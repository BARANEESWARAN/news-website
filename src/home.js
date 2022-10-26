import React from "react"
import "./Components/Dashboard/home.css"
import{useState,useEffect} from'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { AiFillAudio } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import axios from 'axios'


function Home({values}){
    const [value,setvalue]=useState([])
    const [text,setText] = useState('');
    const {speak} = useSpeechSynthesis();
   
    useEffect(() => {
    console.log(values,"gggg")
    axios.get(`https://newsapi.org/v2/everything?q=${values}&apiKey=8d70e0e8adaf4cffbb192d198583d987`).then((data) =>{
      console.log(data.data.articles,"thisis")  
          
        setvalue(data.data.articles)}).catch((err)=>{
          console.log(err,"apierror")
        })  

   
//       if(values.toLowerCase()==="tesla"){
//     console.log("tesla calling")

     
//         axios.get("https://newsapi.org/v2/everything?q=Tesla&apiKey=8d70e0e8adaf4cffbb192d198583d987").then((data) =>{
//       console.log(data.data.articles,"thisis")  
          
//         setvalue(data.data.articles)}).catch((err)=>{
//           console.log(err,"apierror")
//         })  
     
//     }
//     else if(values.toLowerCase()==="cricket"){
//       console.log("cricket")
//       axios.get("https://newsapi.org/v2/everything?q=Cricket&apiKey=8d70e0e8adaf4cffbb192d198583d987").then((data) =>{
//       console.log(data.data.articles,"thisis")  
//       setvalue(data.data.articles)} ).catch((err)=>{
//         console.log(err,"apierror")
//       }) 
//   }

//   else if(values.toLowerCase()==="cars"){
//     console.log("cricket")
//     axios.get("https://newsapi.org/v2/everything?q=Bikes&apiKey=8d70e0e8adaf4cffbb192d198583d987").then((data) =>{
//     console.log(data.data.articles,"thisis")  
//     setvalue(data.data.articles)} ).catch((err)=>{
//       console.log(err,"apierror")
//     }) 
// }


// else if(values.toLowerCase()===""){
//   axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=8d70e0e8adaf4cffbb192d198583d987").then((data) => {
//     console.log(data.data.articles,"thisis")  
     

// setvalue(data.data.articles)


// }).catch((err)=>{
// console.log(err,"apierror")
// })

// }
// else{
// alert("No news like that")
// setvalue([])

// }
        
      }, [values])


    //   useEffect(() => {
    //     let newState = value.map((e) => e); // map your state here
    //     setvalue(newState)
    //  },[]);
// console.log(value
//     ,"baraa")


useEffect(()=>{
   // speak({text:text})
   console.log(text,"kkkk")
   

   speak({text:text})

},[text])
    
    
    const tableRows =value.map((item, i) => {
      const handleOnClick = () => {
        setText(item.description)
       
    
      }

       
        return(
          
//           <div className=" p-8 ">
//   {'{'}/* {/*Card 1*/} */{'}'}
//   <div className="  max-w-sm rounded overflow-hidden shadow-lg ">
//     <img className="  w-full h-max" src="{item.urlToImage}/" />
//     <div className=" px-6 py-4">
//       <div className="font-bold text-xl mb-2 text-gray-700">{'{'}item.title{'}'}</div>
//       <p className="text-gray-700 text-base">
//         {'{'}item.description{'}'}
//       </p>
//       <button className="font-bold text-xl mb-2"> <a href="{item.url}">Read more</a></button>
//     </div>
//     <div className="px-6 pt-4 pb-2">
//       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to favorite
//       </span>
//     </div>
//   </div>
// </div>







<div className="div" >  

{/* <!--Card 1--> */}
<div  className="card"  >
  
  
  <img class="w-full h-fit" src={item.urlToImage}/>
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-gray-700 text-justify">{item.title}</div>
    <p className="description">
      {item.description}    <AiFillAudio style={{cursor:"pointer"}}  onClick={handleOnClick} />
    </p>

   
    <button class="font-bold text-xl mb-2 "> <a href={item.url}>Read more</a></button>
  </div>

    {/* <span class="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2 " style={{}}>Add favorite</span>
  */}
<button class="button-75" role="button"><span class="text">Add Favorite</span></button>







</div>

</div>











    ) })



  
    console.log(text,"vvvv")
return(

  <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1  h-96">{tableRows} </div>
  
)
   






}
export default Home;