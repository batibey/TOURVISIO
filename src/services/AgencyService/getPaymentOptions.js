import axios from "axios"

const mdlGetPaymentOptionsRequest = (setGetPaymentOptionsResponse, setError, getPaymentOptionsResponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/agencyservice/getpaymentoptions`, {
        transactionId: "aab69692-a73d-4e54-8f21-d22763fa3fb9"
     }) 
      .then(res => {
        setGetPaymentOptionsResponse(res.data)
        console.log(getPaymentOptionsResponse)
      }
      )
      .catch(err => {
        setError(err.getPaymentOptionsResponse.data)
      }
      )
} 
export default mdlGetPaymentOptionsRequest