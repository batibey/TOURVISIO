import React from 'react'

import { MdOutlineFlight, MdHotel, MdOutlineSecurity, MdPhotoSizeSelectActual } from 'react-icons/md'
import { RiShoppingBag2Fill } from 'react-icons/ri'
import { AiFillCar } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { FaRunning, FaBus, FaUmbrellaBeach, FaPlusSquare } from 'react-icons/fa'

export default function SearchMenu({setSearch, search}) {
  return (
    <>
    <MdOutlineFlight onClick={() => setSearch("flight")} className='m-1 icon' size={27} />
            <MdHotel onClick={() => setSearch("hotel")} className='m-1 icon' size={27} />
            <RiShoppingBag2Fill onClick={() => setSearch("Dynamic Package")} className='m-1 icon' size={27} />
            <AiFillCar onClick={() => setSearch("rent a car")} className='m-1 icon' size={27} />
            <FaRunning onClick={() => setSearch("excursion")} className='m-1 icon' size={27} />
            <MdOutlineSecurity onClick={() => setSearch("visa")} className='m-1 icon' size={27} />
            <FaBus onClick={() => setSearch("transfer")} className='m-1 icon' size={27} />
            <FaUmbrellaBeach onClick={() => setSearch("holiday package")} className='m-1 icon' size={27} />
            <MdPhotoSizeSelectActual onClick={() => setSearch("tourCulture")} className='m-1 icon' size={27} />
            <FaPlusSquare onClick={() => setSearch("insurance")} className='m-1 icon' size={27} />
            <div style={{ width: "100%", borderTop: "1px solid" }}>
              <h2 style={{ marginTop: "10px" }} >{search.toUpperCase()} SEARCH </h2>
            </div>
    </>
  )
}
