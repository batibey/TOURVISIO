import axios from "axios"

const CommitTransaction  = (searchApi) => {
    axios.post(`${process.env.REACT_APP_API_URL}/bookingservice/committransaction`, {
        "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
        "PaymentInformation": {
          "AccountName": "SanTSG",
          "PaymentTypeId": 1,  // api/AgencyService/GetPaymentTypes
          "PaymentPrice": {  
            "Amount": 100,
            "Curreny": "EUR"
          },
          "InstallmentCount": "1",
          "Reference": "2da27310-34fe-4e81-b561-b90abaa21ad8",
          "PaymentToken": "2da27310-34fe-4e81-b561-b90abaa21ad8"
        }
      }
    )
        .then(res => {
            console.log(res.data.body.hotels)
        }
        )
        .catch(err => {
            console.log(err.priceSearchResponse.data)
        }
        )
}
export default CommitTransaction