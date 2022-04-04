export interface IItem {
  product_id: number;
  price: number;
  name: string;
  author: string;
  description: string;
  created_by: ICreated;
  quantity: number;
  quantity_available: number;
  initial_price: number;
}

export interface ICreated {
  user_id: number;
  display_name: string;
  public_address: string;
}

export interface IAction {
  status: string;
  data: IData;
}
export interface IData {
  products: [];
  creators: [];
}
