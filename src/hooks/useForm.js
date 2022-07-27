import { useState } from "react"

//Hook criado para substituir os Inputs controlados e as funções nos components
const useForm = (initialState) => {
    const [form , setForm] = useState(initialState)

    const onChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    };

    const cleanFields = () => {
        setForm(initialState)
    }

    return { form , onChange , cleanFields}
}
export default useForm;