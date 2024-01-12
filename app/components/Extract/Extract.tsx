import React from 'react'
import Period from '../Period/Period'
import { BiDownload } from 'react-icons/bi'

const Extract = () => {
    const extractData = (): void => {
        alert("Data extracted.")
    }
  return (
    <div className="flex justify-center align-center space-x-4 mt-4 md:mt-0 md:me-24">
        <Period />
        <div className="flex flex-col justify-center align-center=">
            <BiDownload 
                title="Extract Data"
                className="text-3xl hover:text-amber-500"
                onClick={() => extractData()}/>
        </div>
    </div>
  )
}

export default Extract