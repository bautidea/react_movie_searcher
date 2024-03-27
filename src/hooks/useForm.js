import { useState, useEffect } from "react"

const useForm = () => {
  const [ value, setValue ] = useState('')
  const [ error, setError ] = useState(null)
  const [ focused, setFocused ] = useState(false)

  // Handling form in a 'controlled' way, because React is controlling the state.
  // In this way its easier to perform form validation.
  function handleSubmit (event) {
    event.preventDefault()
    console.log({ value });
  }

  function handleChange (event) {
    setValue(event.target.value)
  }

  function onFocus () {
    setFocused(true)
  }

  function onBlur () {
    setFocused(false)
  }

  // Using an Effect hook to preform validations.
  useEffect(() => {
    if (value.startsWith(' ') && focused) {
      setError('Movie name cannot start with an empty space')
      return
    }

    else if (value === '' && focused) {
      setError('Movie name cannot be empty')
      return
    }

    else if (value.length < 3 && focused) {
      setError('Movie name must have more than 3 characters')
      return
    }

    else setError(null)

  }, [value])

  return { value, error, handleSubmit, handleChange, onFocus, onBlur }
}

export default useForm