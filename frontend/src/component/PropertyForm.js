import {useState} from "react"

const PropertyForm=()=>{

const[Name,setname] =useState('')
const[Address,setaddress] =useState('')
const[ImageLink,setLink] =useState('')
const[City,setCity] =useState('')
const[Description,setDescription] =useState('')
const[Price,setPrice] =useState('')
//const [property,setProperty]=useState()
const [error,setError] = useState()

const submitPost =async(e)=>{
   e.preventDefault()
   const Property = {Name,Address,City,ImageLink,Price,Description}

   const response = await fetch('/property', {
     method: 'POST',
     body: JSON.stringify(Property),
     headers: {
        'Content-Type': 'application/json'
}
   }
     
   )
      if(response.ok){
         setname('')
         setaddress('')
         setPrice('')
         setDescription('')
         setLink('')
         setCity('')
      }
      if(!response.ok){
        setError('Fill the details')
      }

}
return (
   <form className="create" data-testid="FORM" onSubmit={submitPost} >
       <h4>Add Property Details</h4>
        <label data-testid="l1"> Property Name : </label>
        <input
        data-testid="i1"
        type="text"
        onChange={(e)=> setname(e.target.value)}
        value={Name}
        />
        <label data-testid="l2"> Property Address : </label>
           <input
        type="text"
        data-testid="i2"
        onChange={(e)=> setaddress(e.target.value)}
        value={Address}
        />
        <label data-testid="l3"> Property Price : </label>
        <input
        type="text"
        data-testid="i3"
        onChange={(e)=> setPrice(e.target.value)}
        value={Price}
        />
          <label data-testid="l4"> Property ImageLink : </label>
          <input
        type="text"
        data-testid="i4"
        onChange={(e)=> setLink(e.target.value)}
        value={ImageLink}
        />
        <label data-testid="l5"> City : </label>
          <input
        type="text"
        data-testid="i5"
        onChange={(e)=> setCity(e.target.value)}
        value={City}
        />
        <label data-testid="l6"> Property Description : </label>
          <input
        type="text"
        data-testid="i6"
        onChange={(e)=> setDescription(e.target.value)}
        value={Description}
        />
        <button>Publish</button>
        {error && <div className="error">{error}</div>}
   </form>
)
}

export default PropertyForm