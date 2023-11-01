"use client";
import Image from "next/image";
import ProductList from "./features/product-list/Productlist";
import Home1 from "./pages/Home/home";
import Navbar from "./features/navbar/navbar";
import { store } from "@/app/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Home1 />
        {/* <Navbar /> */}
      </Provider>
    </>
  );
}
