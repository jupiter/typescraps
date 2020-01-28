import { InputItem } from '../processors/basic'

export interface RawInput {
  ID: string
  DESC: string
  QTY: number
  OPTIONS: string[]
  DATE: string
}

export const mapGood = async (inputObj: RawInput): Promise<InputItem> => {
  return {
    id: inputObj['ID'],
    description: inputObj['DESC'],
    quantity: inputObj['QTY'],
    options: inputObj['OPTIONS'],
    createdAt: new Date(inputObj['DATE']),
  }
}

// export const mapFails = async (
//   inputObj: Partial<RawInput> //
// ): Promise<InputItem> => {
//   return {
//     id: inputObj['ID'],
//     description: inputObj['DESC'],
//     quantity: inputObj['QTY'],
//     options: inputObj['OPTIONS'],
//     createdAt: inputObj['DATE'] && new Date(inputObj['DATE']),
//   }// as InputItem
// }

// export const mapFailsafe = async (
//   inputObj: Partial<RawInput>
// ): Promise<InputItem> => {
//   return {
//     id: inputObj['ID'] || '',
//     description: inputObj['DESC'],
//     quantity: inputObj['QTY'] || 256,
//     options: inputObj['OPTIONS'] || [],
//     createdAt: (inputObj['DATE'] && new Date(inputObj['DATE'])) || new Date(),
//   }
// }
