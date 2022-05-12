import axios from "axios"

const mdlGetProductInfoRequest = (headers, setResponse, setError, response) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/getarrivalautocomplete', {
        productType: 2,
        ownerProvider: 2,
        product: "102576",
        culture: "en-US"
      } , {
      header: headers
    }) 
      .then(res => {
        setResponse(res.data)
        console.log(response)
      }
      )
      .catch(err => {
        setError(err.response.data)
      }
      )
} 
export default mdlGetProductInfoRequest