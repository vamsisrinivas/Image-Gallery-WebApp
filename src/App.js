import axios from 'axios'
import React,{useState} from 'react'
import Gallery from './Gallery'

const apiKey='a954cf9d7908dd2634b087b4eb5c0d06'
const App = () => {
  const[search,setSearch]=useState("")
  const[data,setData]=useState("")
  const changeHandler=(e)=>{
    setSearch(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    ).then(res=>setData(res.data.photos.photo))
   
    setSearch("")
  }

  return (
    <div>
    <center>
      <h2 className="headtag">Gallery Shot</h2>
      <form onSubmit={submitHandler}>
        <input className="textbox" type="text" value={search} name="search" onChange={changeHandler}/>
        <br/>
        <br/>
        <input className="cbutton" type="submit" name="search"/>
      </form>
      <br/>
      <br/>
      <br/>
      {data.length>=1?<Gallery data={data}/>:<h4>Data Not Found</h4>}
    </center>
    
  </div>

  )
}

export default App
