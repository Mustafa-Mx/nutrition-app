import React from 'react'

const Loader = () => {
  return (
    <div class="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-[100vw] caret-transparent">
        <div class="absolute border-4 border-orange-600 border-t-4 border-b-0 border-r-0 rounded-full w-8 h-8 animate-spin duration-200"></div>
        <div class="absolute border-4 border-orange-400 border-t-4 border-b-0 border-r-0 rounded-full w-16 h-16 animate-spin"></div>
        <div class="absolute border-4 border-orange-200 border-t-4 border-b-0 border-r-0 rounded-full w-24 h-24 animate-spin"></div>
    </div>
  )
}

export default Loader