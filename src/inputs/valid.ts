import * as yup from 'yup'
import { InputItem } from '../processors/basic'
import { mapGood } from './vanilla'

const schema = yup.object().shape({
  ID: yup.string().required(),
  DESC: yup.string(),
  QTY: yup
    .number()
    .required()
    .positive()
    .integer(),
  OPTIONS: yup
    .array()
    .of(yup.string())
    .ensure(),
  DATE: yup
    .string()
    .matches(/\d{4}-\d{2}-\d{2}/)
    .default('2022-02-22'),
})

export type ValidatedInput = yup.InferType<typeof schema>

export const mapWithValidation = async (
  unknownObj: any
): Promise<InputItem> => {
  const inputObj = await schema.validate(unknownObj)

  return mapGood(inputObj)
}
