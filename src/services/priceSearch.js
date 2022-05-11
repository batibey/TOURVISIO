import axios from "axios"
const url = "https://preprod-services.tourvisio.com/v2";

const mdlPriceSearchRequest = (setResponse, setError, response, headers) => {
    axios.post(url + '/api/productservice/pricesearch', {
        checkAllotment: true,
        checkStopSale: true,
        getOnlyDiscountedPrice: false,
        getOnlyBestOffers: true,
        productType: 2,
        arrivalLocations: [
            {
                id: "23494",
                type: 2
            }
        ],
        roomCriteria: [
            {
                adult: 2,
                childAges: [
                    2,
                    5
                ]
            },
            {
                adult: 1,
                childAges: [
                    3
                ]
            }
        ],
        nationality: "DE",
        checkIn: "2023-06-20",
        night: 7,
        currency: "EUR",
        culture: "en-US"
    }, {
        header: headers
    })
        .then(res => {
            setResponse(res.data)
            console.log(response)
        }
        )
        .catch(err => {
            setError(err.response.data)
        }
        )
}
export default mdlPriceSearchRequest