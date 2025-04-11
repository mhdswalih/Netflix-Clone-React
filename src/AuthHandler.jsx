import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/firebase'

const AuthHandler = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Logged In')
        navigate('/')
      } else {
        console.log('Logged Out')
        navigate('/login')
      }
    })

    return () => unsubscribe()
  }, [])

  return null
}

export default AuthHandler
