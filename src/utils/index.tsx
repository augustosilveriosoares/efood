export const priceBRL = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Menu[]) => {
  return items.reduce((soma, ValorAtual) => {
    return (soma += ValorAtual.preco)
  }, 0)
}
