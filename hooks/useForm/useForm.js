import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [formValues, setValue] = useState(initialState)

    const reset = () => {
        setValue(initialState)
    }

    const handleInputChange = ({ target }) => {
        setValue({
            ...value,
            [target.name] : target.value
        })
    }

    return [formValues, handleInputChange, reset];
}
