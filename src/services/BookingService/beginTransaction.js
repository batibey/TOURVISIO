import axios from "axios"

const mdlBeginTransactionRequest = (setBeginTransactionResponse, setError, getBeginTransactionResponse) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/bookingservice/begintransaction', {
        offerIds: [
          "2$2$TR~^005^~23494~^005^~70a3f435-bcaa-4890-baf3-ef10caaa22e5"
        ],
        currency: "EUR",
        culture: "en-US"
      }) 
      .then(res => {
        setBeginTransactionResponse(res.data)
        console.log(getBeginTransactionResponse)
      }
      )
      .catch(err => {
        setError(err.getBeginTransactionResponse.data)
      }
      )
} 
export default mdlBeginTransactionRequest