import { useEffect, useContext, useState, createContext } from "react"

const HotelsContext = createContext()
const HotelsProvider = ({ children }) => {
  const [hotels, setHotels] = useState([])
 
useEffect(() => { 
    console.log(hotels)
    }, [hotels])
  
  const values = {
    hotels,
    setHotels
  }

  return <HotelsContext.Provider value={values}>{children}</HotelsContext.Provider>
}
const useHotels = () => useContext(HotelsContext)
export { HotelsProvider, useHotels }