import { mapGood as mapFn } from './inputs/vanilla' // Trusted
// import { mapFails as mapFn } from './inputs/vanilla' // Fails hard
// import { mapFailsafe as mapFn } from './inputs/vanilla' // Hides failure
// import { mapWithValidation as mapFn } from './inputs/valid' // Fails fast

import { processBasic } from './processors/basic'
import { convert } from './outputs/convert'

const processFn = processBasic
const outputFn = convert

export const main = async (source: string) => {
  const rawInput = JSON.parse(source)

  const inputItem = await mapFn(rawInput)

  const outputItem = processFn(inputItem)

  return outputFn(outputItem)
}
