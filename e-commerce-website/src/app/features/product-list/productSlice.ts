import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { string } from "yup";

// Creating the product type to store the values
type Product = {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: "string";
  category: "string";
  thumbnail: "string";
  images: string[];

  price: string;
};

type Products = Product[];
type InitialState = {
  products: Products;
  isLoading: boolean;
  isError: boolean;
};

const initialState: InitialState = {
  products: [],
  isLoading: false,
  isError: false,
};

// Using the async thunk
export const fetchProduct = createAsyncThunk("fetch-product", async () => {
  const response = await axios.get("http://localhost:8000/products");
  console.log(response.data);

  return response.data;
});

export const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Pending
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    // Fulfilled
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    // Rejected
    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log("Error is", action.payload);

      state.isError = false;

      //   state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
