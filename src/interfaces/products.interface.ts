export interface ProductProps {
  id: number
  title:string
  price: number
  image: string
  quantity?: number
  added?: boolean,
  ordem?: number,
}