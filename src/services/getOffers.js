import axios from "axios"

const mdlGetOffersRequest = (headers, setResponse, setError, response) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/getoffers', {
        searchId: "f43dcb3a-0214-4d17-8838-7540c815245d",
        offerId: "2$2$05ba9a42-24a8-41ce-bc61-40e6c443f9e5",
        productType: 2,
        productId: "105841",
        currency: "EUR",
        culture: "tr-TR",
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
export default mdlGetOffersRequest

// , {
//     header: headers
//   }