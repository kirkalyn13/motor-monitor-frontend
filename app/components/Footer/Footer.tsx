import { getCurrentYear } from '@/app/utils/helpers'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-8 text-white w-full">
        <div className="container mx-auto text-center">
            <p>&copy; {getCurrentYear()} Motor Monitor.</p>
        </div>
    </footer>
  )
}

export default Footer