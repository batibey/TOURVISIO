import axios from "axios"

const mdlGetArrivalAutoCompleteRequest = (location, setResponse) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/getarrivalautocomplete', {
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