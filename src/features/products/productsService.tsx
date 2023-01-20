import axios from "axios";

const API_URL = "https://reqres.in/api/products";

const getProducts = async (page: string = "1", id: string = "") => {
  //   const config = {
  //     params: {
  //       page: page,
  //       perPage: perPage,
  //     },
  //   };

  const response = await axios.get(
    API_URL + `?page=${page}&per_page=${5}&id=${id}`
  );

  return response.data;
};

const productsService = {
  getProducts,
};

export default productsService;
