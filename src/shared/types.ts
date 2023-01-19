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

export interface IProductState {
  products: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IProduct[];
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
