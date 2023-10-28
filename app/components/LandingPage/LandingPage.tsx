import React from 'react'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <section 
      className={`h-screen flex flex-col items-center justify-center
        bg-[url('../public/hero.avif')] bg-cover bg-center`}>
      <div className="md:w-1/2 flex flex-col items-center justify-center
        px-4 py-8 md:m-4 border border-0 md:rounded-lg bg-black bg-opacity-50
        opacity-0 animate-fade-in">
        <h1 className="text-4xl my-4 font-bold text-center text-white">
          Empower Your Operations with Wireless Three-Phase Induction Motor Monitoring
        </h1>
        <p className="text-md text-center text-white">
          Ready to revolutionize your industrial operations with wireless three-phase induction motor monitoring?
          Our innovative system is designed to optimize the performance, efficiency, and maintenance of your industrial machinery.
        </p>
      </div>
      <div className="flex flex-col md:flex-row my-8">
        <Link 
          className="px-16 py-4 mx-4 my-2 text-white text-center 
            border border-0 rounded-md bg-amber-500 bg-opacity-50
            hover:bg-amber-300 hover:font-bold hover:text-black
            opacity-0 animate-fade-in"
          href="/register" 
          scroll={false}>
          SIGN UP
        </Link>
        <Link 
          className="px-16 py-4 mx-4 my-2 text-white text-center 
            border border-0 rounded-md bg-black bg-opacity-50
            hover:bg-gray-500 hover:font-bold
            opacity-0 animate-fade-in"
          href="/login" 
          scroll={false}>
          LOGIN
        </Link>
      </div>
    </section>
  )
}

export default LandingPage