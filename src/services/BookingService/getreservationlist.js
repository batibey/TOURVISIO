import axios from "axios"

const GetReservationList  = (searchApi) => {
    axios.post(`${process.env.REACT_APP_API_URL}/bookingservice/committransaction`, {
      "culture": "en-US",
      "dateCriterias": [
        {
          "type": 1,
          "from": "2021-07-10",
          "to": "2021-07-20"
        }
      ]
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
export default GetReservationList