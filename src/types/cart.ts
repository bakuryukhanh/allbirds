import { IProduct, IProductColor, IProductSize } from "./product";
export interface ICartItem extends IProduct {
  color: IProductColor;
  size: IProductSize;
  quantity: number;
}
