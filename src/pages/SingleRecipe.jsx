import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleRecipe = () => {
    let location=useLocation()
    console.log(location.state)
    console.log(location.state.recipe)
    console.log(location.state.recipe.healthLabels)
  return (
    <div style={{marginTop:"100px"}}  >
      
       <div className='row'>
            <div className="col-md-6 d-flex justify-content-center">
            <img className='img-fluid rounded-4' src={location.state.recipe.image} alt="" />
            </div>
            <div className='col-md-6 '>
            <h2>Title: {location.state.recipe.label}</h2>
            <h3>Meal Type: {location.state.recipe.mealType}</h3>

            <div className="row d-flex  p-2">
             <div className="col-md-6 mt-2 ">
                  <div className="row d-flex gap-2 ">
                  <div className="col-5 bg-warning">
                <p>{location.state.recipe.totalNutrients.CA.label}</p>
                <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)} mg</p>
              </div>
              <div className="col-6  bg-warning">
                <p>{location.state.recipe.totalNutrients.FAT.label}</p>
                <p>{Math.ceil(location.state.recipe.totalNutrients.FAT.quantity)} mg</p>
              </div>
                  </div>
             </div>
              <div className="col-md-6 mt-2">
            <div className="row d-flex gap-2">
            <div className="col-5 bg-warning">
                <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
                <p>{Math.ceil(location.state.recipe.totalNutrients.SUGAR.quantity)} mg</p>
              </div>
              <div className="col-6 bg-warning">
                <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
                <p>{Math.ceil(location.state.recipe.totalNutrients.PROCNT.quantity)} mg</p>
              </div>
            </div>
              </div>
            </div>
            <Link  to={location.state.recipe.url} className='btn btn-success mt-3'>How to make recipe</Link>

            </div>

       </div>
      <div className="row  mt-5 d-flex justify-content-center align-item-center ms-2">
      <div className="col-md-5 d-flex justify-content-center flex-column ms-2">
        <h2>Health Label</h2>
        <ul>
        {location.state.recipe.healthLabels.map((obj,index)=>{
        return    <li>{obj}</li>
        
       })}
        </ul>
       </div>
       <div className="col-md-5">
       <h2>Ingredints </h2>
       
       <ul>
       {location.state.recipe.ingredients.map((ele,index)=>{
                return    <li>{ele.text}</li>
               
        })}
       </ul>
       </div>
      </div>
        
        
      
    </div>
  )
}

export default SingleRecipe
