import axios from "axios"

const mdlPriceSearchRequest = (searchApi) => {
    axios.post(`${process.env.REACT_APP_API_URL}/productservice/pricesearch`, {
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
                childAges: [3]
            }
        ],
        nationality: searchApi.nationality,
        checkIn: searchApi.checkin,
        night: parseInt(searchApi.checkOut) - parseInt(searchApi.checkin) + 1, //düzeltilecek
        currency: searchApi.currency,
        culture: "en-US"
    })
        .then(res => {
            console.log(searchApi)
            console.log(res.data)
        }
        )
        .catch(err => {
            console.log(err.priceSearchResponse.data)
        }
        )
}
export default mdlPriceSearchRequest