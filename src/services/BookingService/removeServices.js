import axios from "axios"

const mdlRemoveServicesRequest = (setRemoveServicesResponse, setError, getRemoveServicesResponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/bookingservice/removeservices`, {
        transactionId: "fad80a51-3ed0-4502-b623-31992a73aa14",
        services: [
            "2"
        ],
        currency: "EUR",
        culture: "en-US"
    })
        .then(res => {
            setRemoveServicesResponse(res.data)
            console.log(getRemoveServicesResponse)
        }
        )
        .catch(err => {
            setError(err.getRemoveServicesResponse.data)
        }
        )
}
export default mdlRemoveServicesRequest