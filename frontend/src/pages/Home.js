import { useEffect,useState } from "react"
import PropertyCard from "../component/PropertyCard.js"
import PropertyForm from "../component/PropertyForm"


const Home =()=>{
   const [property,setProperty] =useState(null)
  
   useEffect(()=> {
      
         const fetchProperty=async()=>{
          
         const propertyDetails   =await fetch('/property/')
         const json = await propertyDetails.json()
         if(propertyDetails.ok){
           setProperty([...json])
         }
         }
        
         fetchProperty()
        
      },)
return(
     <div className="Home"  data-test-id="CardContainer">
      <div className="PropertyDetails">
      {property&&property.map((properties)=>(
            
            <PropertyCard key={properties._id} property= {properties}/>
           
      ))
      }
      </div>
      <PropertyForm/>
     </div>
)
}
export default Home