import React from 'react'

function AutocompleteAddress() {
  return (
    <div>
        <div className='mt-3'>
            <label htmlFor="" className='text-gray-400'>From Where ?</label>
            <input type="text" className='bg-white outline-none focus:border-yellow-300 p-1 border-[1px] w-full rounded-md ' />
        </div>
        <div className='mt-3'>
            <label htmlFor="" className='text-gray-400'>Destination</label>
            <input type="text" className='bg-white outline-none focus:border-yellow-300 p-1 border-[1px] w-full rounded-md ' />
        </div>
    </div>
  )
}

export default AutocompleteAddress
