import * as Yup from "yup";

export const ContactDataSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    phone: Yup.string().required("Telefone é obrigatório"),
});