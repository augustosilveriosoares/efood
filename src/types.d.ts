declare type HomeItemType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

declare type CategoryItemType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
