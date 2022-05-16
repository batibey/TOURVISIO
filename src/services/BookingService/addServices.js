import axios from "axios"

const mdlAddServicesRequest = (setAddServicesResponse, setError, getAddServicesRequestResponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/bookingservice/addservices`, {
        transactionId: "fad80a51-3ed0-4502-b623-31992a73aa14",
        offers: [
            {
                offerId: "1$4$$DE$1$240$20220419$2"
            }
        ],
        currency: "EUR",
        culture: "en-US"
    }) 
      .then(res => {
        setAddServicesResponse(res.data)
        console.log(getAddServicesRequestResponse)
      }
      )
      .catch(err => {
        setError(err.getAddServicesRequestResponse.data)
      }
      )
} 
export default mdlAddServicesRequest