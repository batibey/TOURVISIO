import axios from "axios"

//Nationality
const Germany = Symbol("DE")
const England = Symbol("EN")
const Turkey = Symbol("TR")
const UnitedKingdom = Symbol("GB")
const Switzerland = Symbol("CH")
const Spain = Symbol("ES")
const Netherlands = Symbol("NL")
const Mexico = Symbol("MX")
const Italy = Symbol("IT")
const CzechRepublic = Symbol("CZ")
const Brazil = Symbol("BR")
const Maldives = Symbol("MV")
const Macedonia = Symbol("MK")
const Madagascar = Symbol("MG")


const mdlPriceSearchRequest = (searchApi, hotels, setHotels) => {
    axios.post(`${process.env.REACT_APP_API_URL}/productservice/pricesearch`, {
        checkAllotment: true,
        checkStopSale: true,
        getOnlyDiscountedPrice: false,
        getOnlyBestOffers: true,
        productType: 2,
        arrivalLocations: [
            {
                id: "23494",
                type: 2,
                provider: 2,
                name: searchApi.location
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
            setHotels(res.data.body.hotels)
        }
        )
        .catch(err => {
            console.log(err.priceSearchResponse.data)
        }
        )
}
export default mdlPriceSearchRequest