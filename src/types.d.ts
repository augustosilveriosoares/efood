declare type Menu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao?: string
}
declare type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}
