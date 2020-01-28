export interface InputItem {
  id: string
  description?: string
  quantity: number
  options: string[]
  createdAt: Date
}

export const processBasic = ({
  id,
  options,
  quantity,
  createdAt,
  ...item
}: InputItem) => {
  return {
    options: options.map((option) => option.toLowerCase()),
    allowance: Math.floor(
      quantity / ((createdAt.valueOf() - Date.now()) / 86400000)
    ),
    id: id.toUpperCase(),
    ...item,
  }
}

export type CommonItem = ReturnType<typeof processBasic>
