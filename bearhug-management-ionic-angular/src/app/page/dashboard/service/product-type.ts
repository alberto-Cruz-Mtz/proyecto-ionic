export interface IProduct {
  id?: number;
  code: string;
  description: string;
  sale: string;
  purchasePrice: number;
  salesprice: number;
  mayoreo: number;
  category: string;
  quantity: string;
}

export const URL_API_PRODUCT = "http://localhost:8080/product";
