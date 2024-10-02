import { produtos } from "@/core"

export default function PaginaProduto(props: any) {
  const id = +props.params.id
  const produto = produtos.find(produto => produto.id === id)

  return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}