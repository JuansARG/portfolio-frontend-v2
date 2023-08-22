import backendApi from "@/api/BackendApi"
import type { Form } from "@/interfaces/Form"

export const useContact = () => {

    const submitMail = ( mailForm: Form ) => {
        return backendApi.post('/api/v1/contact', mailForm);
    }

    return {
        submitMail,
    }
}