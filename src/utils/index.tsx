export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: CategoryItemType[]) => {
  return items.reduce((accumulator, currentValue) => {
    if (currentValue.preco) {
      return (accumulator += currentValue.preco)
    }
    return 0
  }, 0)
}
