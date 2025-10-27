import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const Loader = () => {
    const { navigate } = useAppContext()
    const { nextUrl } = useParams()

  return (
    <div>
        
    </div>
  )
}

export default Loader