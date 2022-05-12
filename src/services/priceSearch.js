import axios from "axios"

const mdlPriceSearchRequest = (setPriceSearchResponse, setError, priceSearchResponse) => {
    axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/pricesearch', {
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
    })
        .then(res => {
            setPriceSearchResponse(res.data)
            console.log(priceSearchResponse)
        }
        )
        .catch(err => {
            setError(err.priceSearchResponse.data)
        }
        )
}
export default mdlPriceSearchRequest