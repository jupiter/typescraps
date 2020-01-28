import { CommonItem } from '../processors/basic'

export const convert = ({
  id,
  description,
  options,
  allowance,
}: CommonItem) => {
  return JSON.stringify(
    {
      id,
      description,
      options,
      allowance,
    },
    null,
    '  '
  )
}
