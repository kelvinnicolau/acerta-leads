import * as Yup from "yup";
import { MARITAL_STATUS } from "../interfaces/PersonalData/enums/maritalStatus";

export const PersonalDataSchema = Yup.object().shape({
    cpf: Yup.string()
        .required("CPF é obrigatório"),
    name: Yup.string().required("Nome é obrigatório"),
    maritalStatus: Yup.string().required("Estado civil é obrigatório"),
    spouseName: Yup.string().when("maritalStatus", {
        is: (value: string) => value === MARITAL_STATUS.MARRIED,
        then: Yup.string().required("Nome do cônjuge é obrigatório"),
        otherwise: Yup.string().notRequired(),
    }),
});
