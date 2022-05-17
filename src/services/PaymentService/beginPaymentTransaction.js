import axios from "axios"

const mdlBeginPaymentTransactionRequest = (setBeginPaymentTransactionResponse, setError, getBeginPaymentTransactionResponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/paymentservice/beginpaymenttransaction`, {
        TransactionId:"37efbea7-a2bc-4e6a-939d-61eb12857946",
        PaymentOption:3,
        PaymentTypeId:"1033",
        Installment:1,
        CardInfo:{
           ExpiryMonth:"11",
           ExpiryYear:"2021",
           CardNo:"4090700102323514",
           CardHolderFirstName:"AAA",
           CardHolderLastName:"BBBB",
           CvvNo:"834"
        },
        SuccessUrl:"http://localhost:8080/secure3DSuccess.html",
        ErrorUrl:"http://localhost:8080/secure3DError.html"
     })
        .then(res => {
            setBeginPaymentTransactionResponse(res.data)
            console.log(getBeginPaymentTransactionResponse)
        }
        )
        .catch(err => {
            setError(err.getBeginPaymentTransactionResponse.data)
        }
        )
}
export default mdlBeginPaymentTransactionRequest