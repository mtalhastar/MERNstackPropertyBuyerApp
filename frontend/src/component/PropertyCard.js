import PropertyForm from '../component/PropertyForm'
import {useState} from  'react'
const PropertyCard =({property})=>{
        const[Price,setPrice] =useState('')
        const[Name,setName] =useState('')
 const deleteProperty=async()=>{
        const deleteProperty =await fetch('/property/'+property._id,{
                method: 'DELETE'
        })
 }
 const updateProperty=async()=>{
        
       
        const Property={
        Name:Name,
        Address:PropertyForm.Address,
        City:PropertyForm.City,
        ImageLink:PropertyForm.ImageLink,
        Price:Price,
        Description:PropertyForm.Description,
       }
        const update =await fetch('/property/'+property._id,{
                method: 'PUT',
                body: JSON.stringify(Property),
                headers: {
                   'Content-Type': 'application/json'
                }
        })
  
 }


return(
        <div className="PP" >
        <img data-testid="ImageLink" src={property.ImageLink} width="300px" height="300px" />
        
        <h4> {property.Name}</h4>
         <p> <strong> City : </strong> {property.City}</p>
         <p data-testid="label1">  <strong>  Price : </strong> {property.Price}</p>
         <p> <strong>Address</strong> : {property.Address}</p>
         <p> <strong>Description</strong> : {property.Description}</p>      
         <p>Post created at {property.createdAt}</p> 
         <button className="btn"  onClick={deleteProperty}>Delete</button>
         <button className="btn"  onClick={updateProperty}>Update</button>
       
        
         <form className="create" onSubmit={updateProperty}> 
      
        <label> Edit Price : </label>
        <input
          data-testid="PriceInput"
        type="text"
        onChange={(e)=> setPrice(e.target.value)}
        value={Price}
        />
        <label> Edit Name : </label>
         <input
         data-testid="NameInput"
        type="text"
        onChange={(e)=> setName(e.target.value)}
        value={Name}
        />
        </form>
        </div>
)

}
export default PropertyCard

