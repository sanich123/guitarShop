export interface Guitar {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  description: string,
  previewImg: string,
  stringCount: number,
  rating: number,
  price: number,
  comments: Comments[],
}

export interface Comments {
  id: string,
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
  createAt: string,
  guitarId: number
}
export interface Cart {
    quantity: number,
    id: number,
    price: number,
}

export interface State {
  cart: Cart[],
  discount: {
    discount: number,
  }
}


