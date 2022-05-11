import axios from "axios"

const mdlGetArrivalAutoCompleteRequest = (location, headers, setResponse, setError, response) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/getarrivalautocomplete', {
        culture: "en-US",
        currency: "EUR",
        productType: 2,
        query: location || "antalya"
     }, {
      header: headers
    }) // search is the object with the search parameters
      .then(res => {
        setResponse(res.data && res.data.body.items)
        console.log(response)
      }
      )
      .catch(err => {
       console.log(err)
      }
      )
} 
export default mdlGetArrivalAutoCompleteRequest