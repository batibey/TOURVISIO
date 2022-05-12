import axios from "axios"

const mdlGetArrivalAutoCompleteRequest = (location, headers, setResponse, setError, response) => {
  axios.post('https://preprod-services.tourvisio.com/v2/api/productservice/getarrivalautocomplete', {
    culture: "en-US",
    currency: "EUR",
    productType: 2,
    query: location || "antalya"
  }, {
    header: headers
  })
    .then(res => {
      setResponse(res.data && res.data.body.items)
      console.log(response)
    }
    )
    .catch(err => {
      //setError(err.response.data)
      console.log(err)
    }
    )
}
export default mdlGetArrivalAutoCompleteRequest