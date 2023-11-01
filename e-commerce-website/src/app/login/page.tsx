"use client";

import { useFormik } from "formik";
import Link from "next/link";

const login = () => {
  interface InitialValues {
    email: string;
    password: string;
  }
  const formik = useFormik<InitialValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted");
      console.log("Values", values.email);
    },
  });

  return (
    <>
      <div className="mx-auto mt-12  w-3/5 pt-2 pb-3 pl-14 bg-slate-100">
        <p className="text-black font-bold ml-[28%] text-lg  ">
          Log into your account
        </p>
        <form onSubmit={formik.handleSubmit}>
          <label className="text-xs font-medium" htmlFor="email">
            Email Address
          </label>
          <br></br>
          <input
            className="outline-blue-300 border  rounded-sm w-[60%] py-0.5"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            //  formik.handleChange is a function provided by Formik that is used to handle changes in form input fields. It plays a crucial role in managing the state of the form and ensuring that form values are updated as users interact with the form.
            onBlur={formik.handleBlur}
            // In Formik, the formik.onBlur method is used to handle the onBlur event for form input fields. The onBlur event occurs when a user interacts with an input field and then moves focus away from it, typically by clicking outside the field or pressing the Tab key to navigate to another field.

            value={formik.values.email}
          ></input>
          <br></br>
          <label className="text-xs font-medium" htmlFor="password">
            Password
          </label>
          <br></br>
          <input
            className="outline-blue-300 border  rounded-sm w-[60%] py-0.5"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            //  formik.handleChange is a function provided by Formik that is used to handle changes in form input fields. It plays a crucial role in managing the state of the form and ensuring that form values are updated as users interact with the form.
            onBlur={formik.handleBlur}
            // In Formik, the formik.onBlur method is used to handle the onBlur event for form input fields. The onBlur event occurs when a user interacts with an input field and then moves focus away from it, typically by clicking outside the field or pressing the Tab key to navigate to another field.

            value={formik.values.password}
          ></input>
          <br></br>
          <Link href="#" className="text-xs  text-blue-500 ml-[45%]">
            Forgot Password
          </Link>
          <br></br>
          <button
            type="submit"
            className="text-sm bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-600 hover:to-purple-500  bg- w-[60%] rounded-sm text-white mt-4 py-1"
          >
            Log In
          </button>
        </form>
        <Link href="#" className="text-xs text-blue-500 ml-[20%]">
          New Account? SignUp
        </Link>
      </div>
    </>
  );
};

export default login;
