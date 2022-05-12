import axios from "axios"

const mdlGetOffersRequest = (setGetOffersResponse, setError, getOffersResponse) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/getoffers', {
        searchId: "f43dcb3a-0214-4d17-8838-7540c815245d",
        offerId: "2$2$05ba9a42-24a8-41ce-bc61-40e6c443f9e5",
        productType: 2,
        productId: "105841",
        currency: "EUR",
        culture: "tr-TR",
      }) 
      .then(res => {
        setGetOffersResponse(res.data)
        console.log(getOffersResponse)
      }
      )
      .catch(err => {
        setError(err.getOffersResponse.data)
      }
      )
} 
export default mdlGetOffersRequest
