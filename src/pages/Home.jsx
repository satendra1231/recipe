import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import Navbar from '../component/Navbar'


const Home = () => {

    let inputRef=useRef()
    const [searchvalue, setsearchvalue] = useState("pizza");

  const [allfood, setallfood] = useState([]);
  console.log(allfood)
  let getdata = async()=>{
    let res=await fetch(`https://api.edamam.com/search?q=${searchvalue}&app_id=d46ccc91&app_key=5e0d72415589134a580eb433a84d8a8a`);
    let data=await res.json();
    setallfood(data.hits);
    
  }
  useEffect(()=>{
    getdata()
  },[searchvalue])

  const handlesearch=(e)=>{
   e.preventDefault()
    let value=inputRef.current.value
    setsearchvalue(value)
    console.log(value)
  }

  
  return (
    <div className='row d-flex justify-content-center gap-3'>
        {/* <Navbar/> */}
      
     <div>
     <label htmlFor="" className='d-flex justify-content-center gap-3'>
        <input ref={inputRef} className='col-5 rounded-3' type="text" name="" id=""  placeholder='Search'/>
        <button onClick={handlesearch} className='btn btn-success rounded-2 '>Search</button>
      </label>
     </div>
      {

        allfood.map((ele)=>{
          return <div key={ele.recipe.url} className="card rounded-4 " style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
   
    <Link state={ele} to="/single" className="btn btn-primary">View Recipe</Link>
    {/* <button onClick={()=>handleitem(ele)}>Click me</button> */}
  </div>
</div>

        })
      }
    </div>
  )
}

export default Home
