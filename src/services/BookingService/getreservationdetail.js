import axios from "axios"

const GetReservationDetail = (searchApi) => {
    axios.post(`${process.env.REACT_APP_API_URL}/bookingservice/committransaction`, {
      "ReservationNumber": "RC002576",
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
export default GetReservationDetail