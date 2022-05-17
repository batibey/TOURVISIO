import axios from "axios"

const mdlGetPaymentOptionDetailRequest = (setGetPaymentOptionsDetailResponse, setError, getPaymentOptionsDetailResponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/agencyservice/getpaymentoptiondetail`, {
        transactionId: "aab69692-a73d-4e54-8f21-d22763fa3fb9",
        PaymentOption: "3"
    })
        .then(res => {
            setGetPaymentOptionsDetailResponse(res.data)
            console.log(getPaymentOptionsDetailResponse)
        }
        )
        .catch(err => {
            setError(err.getPaymentOptionsDetailResponse.data)
        }
        )
}
export default mdlGetPaymentOptionDetailRequest