import { useState, useEffect, useRef } from "react"

const useForm = () => {
  const [ value, setValue ] = useState('')
  const [ error, setError ] = useState(null)
  const isFirstInput = useRef(true)

  // Using an Effect hook to preform validations.
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = value === ''
      return
    }

    if (value.startsWith(' ')) {
      setError('Movie name cannot start with an empty space')
      return
    }

    if (value === '') {
      setError('Movie name cannot be empty')
      return
    }

    if (value.length < 3) {
      setError('Movie name must have more than 3 characters')
      return
    }

    setError(null)

  }, [value])

  return { value, error, setValue }
}

export default useForm