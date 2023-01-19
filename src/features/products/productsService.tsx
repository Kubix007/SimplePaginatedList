import axios from "axios";

const API_URL = "https://reqres.in/api/products";

const getProducts = async (page: string, perPage: string, id: string) => {
  //   const config = {
  //     params: {
  //       page: page,
  //       perPage: perPage,
  //     },
  //   };

  const response = await axios.get(
    API_URL + `?page=${page}&per_page=${perPage}$id=${id}`
  );

  return response.data;
};

const productsService = {
  getProducts,
};

export default productsService;
