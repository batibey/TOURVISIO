import axios from "axios"

const mdlSetReservationInfoRequest = (setSetReservationInfoResponse, setError, getSetReservationInfoResponse) => {
    axios.post(`${process.env.REACT_APP_API_URL}/bookingservice/addservices`, {
        transactionId: "fad80a51-3ed0-4502-b623-31992a73aa14",
        travellers: [
            {
                travellerId: "1",
                type: 1,
                title: 1,
                passengerType: 1,
                name: "Name",
                surname: "Surname",
                isLeader: true,
                birthDate: "1990-10-10T00:00:00",
                nationality: {
                    twoLetterCode: "DE"
                },
                identityNumber: "",
                passportInfo: {
                    serial: "a",
                    number: "13",
                    expireDate: "2030-01-01T00:00:00",
                    issueDate: "2020-01-01T00:00:00",
                    citizenshipCountryCode: ""
                },
                address: {
                    contactPhone: {
                        countryCode: "90",
                        areaCode: "555",
                        phoneNumber: "5555555"
                    },
                    email: "email@test.com",
                    address: "",
                    zipCode: "",
                    city: {
                        id: "",
                        name: ""
                    },
                    country: {
                        id: "",
                        name: ""
                    }
                },
                destinationAddress: {},
                orderNumber: 1,
                documents: [],
                insertFields: [],
                status: 0
            },
            {
                travellerId: "2",
                type: 1,
                passengerType: 1,
                title: 3,
                name: "SecondName",
                surname: "Surname",
                isLeader: false,
                birthDate: "1990-01-01T00:00:00",
                nationality: {
                    twoLetterCode: "DE"
                },
                identityNumber: "",
                passportInfo: {
                    serial: "a",
                    number: "19",
                    expireDate: "2030-01-01T00:00:00",
                    issueDate: "2020-01-01T00:00:00",
                    citizenshipCountryCode: ""
                },
                address: {
                    phone: "",
                    email: "",
                    address: "",
                    zipCode: "",
                    city: {
                        id: "",
                        name: ""
                    },
                    country: {
                        id: "",
                        name: ""
                    }
                },
                destinationAddress: {},
                orderNumber: 2,
                documents: [],
                insertFields: [],
                status: 0
            }
        ],
        customerInfo: {
        isCompany: false,
        passportInfo: {},
        address: {
            city: {
            name: "Antalya"
            },
            country: {
            name: "Turkey"
            },
            email: "customer@customer.com",
            phone: "+902222222222",
            address: "Customer test",
            zipCode: "07000"
        },
        taxInfo: {},
        title: 1,
        name: "Customer name",
        surname: "Customer surname",
        birthDate: "1996-01-01",
        identityNumber: "11111111111"
        },
        reservationNote: "Reservation note",
        agencyReservationNumber: "Agency reservation number text"
    })
        .then(res => {
            setSetReservationInfoResponse(res.data)
            console.log(getSetReservationInfoResponse)
        }
        )
        .catch(err => {
            setError(err.getSetReservationInfoResponse.data)
        }
        )
}
export default mdlSetReservationInfoRequest