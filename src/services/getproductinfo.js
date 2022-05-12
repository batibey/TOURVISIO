import axios from "axios"

const mdlGetProductInfoRequest = (setGetProductInfoResponse, setError, getProductInfoResponse) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/getarrivalautocomplete', {
        productType: 2,
        ownerProvider: 2,
        product: "102576",
        culture: "en-US"
      }) 
      .then(res => {
        setGetProductInfoResponse(res.data)
        console.log(getProductInfoResponse)
      }
      )
      .catch(err => {
        setError(err.getProductInfoResponse.data)
      }
      )
} 
export default mdlGetProductInfoRequest