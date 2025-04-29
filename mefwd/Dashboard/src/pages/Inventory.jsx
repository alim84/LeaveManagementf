import { useState } from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import { toast, Bounce } from "react-toastify";
import Cookies from "js-cookie";

const Inventory = () => {
  const [doctorName, setdoctorName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    const token = Cookies.get("token");
    console.log(token);
    e.preventDefault();
    setLoader(true);
    let data = new FormData();
    data.append("name", doctorName);
    data.append("description", categoryDescription);
    if (categoryImage) {
      data.append("image", categoryImage);
    }

    axios
      .post("http://localhost:5000/api/v1/category/createcategory", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Cookie: `token=${token}`,
        },
        withCredentials: true,
      })
      .then((data) => {
        toast.success(data ? data.data.msg : "category creted successfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setLoader(false);

        console.log(data);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
    // {
    //   categoryName, categoryDescription, categoryImage;
    // }
  };
  console.log(doctorName);
  console.log(categoryDescription);
  return (
    <div className="mx-auto w-full max-w-4xl mt-10 pt-6 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        স্টোর
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Name */}
        <div className="flex flex-col">
          <level className="text-gray-700 block">মালামালের নাম</level>

          <input
            className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
            placeholder="মালামালের নাম"
            type="text"
            name="emname"
            onChange="{productNameHandler}"
          ></input>
          {/* <label htmlFor="categoryName" className="text-lg text-gray-700">
            Doctor Name
          </label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setdoctorName(e.target.value)}
            placeholder="Enter category name"
            className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
          /> */}
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700 block">পরিমান :</level>
          <input
            className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
            placeholder="পরিমান"
            type="text"
            name="designation"
            onChange="{quantityHandler}"
          ></input>
          {/* <label htmlFor="categoryName" className="text-lg text-gray-700">
            Doctor Code
          </label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setdoctorName(e.target.value)}
            placeholder="Enter category name"
            className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
          /> */}
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">ক্যাশ মেমো/টেন্ডারের তথ্য</level>

          <input
            className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
            placeholder="ক্যাশ মেমো/টেন্ডারের তথ্য"
            type="text"
            name="emname"
            onChange="{cashmemoHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">ক্রয়ের তারিখ :</level>
          <input
            className="mt-2 p-4 border text-gray-700 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
            type="date"
            name="designation"
            onChange="{purchasedateHandler}"
          ></input>
          {/* <label htmlFor="categoryName" className="text-lg text-gray-700">
            Doctor Code
          </label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setdoctorName(e.target.value)}
            placeholder="Enter category name"
            className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
          /> */}
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700"> মালামালের ধরন :</level>

          <select
            className="mt-2 p-4 border text-gray-700 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
            id="year"
            name="year"
            onChange="{productsCatagoryHandler}"
          >
            <option value="কম্পিউটার">কম্পিউটার </option>
            <option value="স্ট্রেশনারী">স্ট্রেশনারী</option>
            <option value="পেপার">পেপার</option>
            <option value="পেন্সিল">পেন্সিল</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex relative justify-center">
          {loader ? (
            <div className="absolute top-6">
              <Spinner className="w-[45px] h-[25px] " color="red" />
            </div>
          ) : (
            <button
              type="submit"
              className="px-10 py-3 mt-4 hover:shadow-bg-yellow-700 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none transition-all duration-300"
            >
              সংরক্ষণ করুন
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Inventory;
