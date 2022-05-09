import { useEffect, useContext, useState, createContext } from "react"

const SearchContext = createContext()
const SearchProvider = ({ children }) => {
  const [searchApi, setSearchApi] = useState(null)
 
useEffect(() => { 
    console.log(searchApi)
    }, [searchApi])
  
  const values = {
    searchApi,
    setSearchApi
  }

  return <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
}
const useSearch = () => useContext(SearchContext)
export { SearchProvider, useSearch }