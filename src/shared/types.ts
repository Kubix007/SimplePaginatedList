export interface IFilterState {
  id: string;
  page: string;
  per_page: string;
}

export interface IProduct {
  id: string;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface IProductsState {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IProduct[];
}
