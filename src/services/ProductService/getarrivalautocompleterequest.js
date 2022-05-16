import axios from "axios"

const mdlGetArrivalAutoCompleteRequest = (location, setResponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/productservice/getarrivalautocomplete`, {
        culture: "en-US",
        currency: "EUR",
        productType: 2,
        query: location.length > 3 ? location : "antalya"
     })
      .then(res => {
        setResponse(res.data && res.data.body.items)
      }
      )
      .catch(err => {
       console.log(err)
      }
      )
} 

export default mdlGetArrivalAutoCompleteRequest