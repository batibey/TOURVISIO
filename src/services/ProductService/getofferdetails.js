import axios from "axios"

const mdlGetOfferDetailsRequest = (setGetOfferDetailResponse, setError, getOfferDetailresponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/productservice/getofferdetails`, {
        offerIds:[
           "1$2$202202170837$TR$0|1528$1$167$15073$$$0$0$2"
        ],
        currency:"EUR"
     }) 
      .then(res => {
        setGetOfferDetailResponse(res.data)
        console.log(getOfferDetailresponse)
      }
      )
      .catch(err => {
        setError(err.getOfferDetailresponse.data)
      }
      )
} 
export default mdlGetOfferDetailsRequest