export interface ProductsProps {
  products?: Array<ProductProps>
}

export interface ProductProps {
  id: number
  title:string
  price: number
  image: string
}