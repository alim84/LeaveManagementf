import { useState } from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import { toast, Bounce } from "react-toastify";
import Cookies from "js-cookie";

const Comsumption = () => {
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
        মালামাল বিতরনের তথ্য
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
          <level className="text-gray-700 block">পরিমান </level>
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
          <level className="text-gray-700">দপ্তর/অধিশাখা/শাখার নাম </level>

          <select
            className="mt-2 p-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            required
            id="institute"
            name="institute"
            onChange="{sectionNameHandler}"
          >
            <option value="Secretary">সচিব মহোদয়ের দপ্তর</option>
            <option value="Additional Admin">অতিরিক্ত সচিব (প্রশাসন)</option>
            <option value="Joint Secrtary Admin">যুগ্মসচিব (প্রশাসন)</option>
            <option value="Joint Secretary Per">যুগ্মসচিব (পার)</option>
            <option value="Admin-1">প্রশাসন-১</option>
            <option value="admin-2">প্রশাসন-২</option>
            <option value="admin-3">প্রশাসন-৩</option>
            <option value="Per-1">পার-১</option>
            <option value="per-2">পার-২</option>
            <option value="Per-3">পার-৩</option>
            <option value="comcell">কম্পিউটার সেল</option>
            <option value="Account">হিসার শাখা</option>
            <option value="Library">লাইব্রেরি শাখা</option>
            <option value="AddionalPublic">অতিরিক্ত সচিব (জনসংখ্যা)</option>
            <option value="Jointpublic">যুগ্মসচিব (জনসংখ্যা)</option>
            <option value="Jointlaw">যুগ্মসচিব (আইন)</option>
            <option value="Jointdispline">যুগ্মসচিব (শৃঙ্খলা)</option>
            <option value="displine">শৃঙ্খলা শাখা</option>
            <option value="law-1">আইন-১</option>
            <option value="law-2">আইন-২</option>
            <option value="population-1">জনসংখ্যা-১</option>
            <option value="population-2">জনসংখ্যা-২</option>
            <option value="additionaldev">অতিরিক্ত সচিব (উন্নয়ন)</option>
            <option value="jointdev">যুগ্মসচিব (পরিকল্পনা)</option>
            <option value="jointconsrepair">
              যুগ্মসচিব (নির্মান ও মেরামত)
            </option>
            <option value="jointpurchace">যুগ্মসচিব (ক্রয় ও সংগ্রহ)</option>
            <option value="construction">নির্মাণ শাখা</option>
            <option value="repair">মেরামত শাখা</option>
            <option value="purchase-1">ক্রয় ও সংগ্রহ-১</option>
            <option value="purchase-2">ক্রয় ও সংগ্রহ-২</option>
            <option value="planing-1">পরিকল্পনা-১</option>
            <option value="planing-2">পরিকল্পনা-২</option>
            <option value="planing-3">পরিকল্পনা-৩</option>
            <option value="planing-4">পরিকল্পনা-৪</option>
            <option value="planing-5">পরিকল্পনা-৫</option>
            <option value="planing-6">পরিকল্পনা-৬</option>
            <option value="planing-7">পরিকল্পনা-৭</option>
            <option value="additionalMe">অতিরিক্ত সচিব (চিকিৎসা শিক্ষা)</option>
            <option value="jointMe">যুগ্মসচিব (চিকিৎসা শিক্ষা)</option>
            <option value="JointNur">যুগ্মসচিব (নার্সিং)</option>
            <option value="me-1">চিকিৎসা শিক্ষা-১</option>
            <option value="me-2">চিকিৎসা শিক্ষা-২</option>
            <option value="Nursing">নার্সিং শিক্ষা</option>
            <option value="policy and activitis">নীতি ও কার্যক্রম</option>
            <option value="AdditionalBudget">অতিরিক্ত সচিব (বাজেট)</option>
            <option value="JointBudget-1">যুগ্মসচিব (বাজেট-১)</option>
            <option value="JointBudget-2">যুগ্মসচিব (বাজেট-২)</option>
            <option value="Budget-1">বাজেট-১ শাখা</option>
            <option value="Budget-2">বাজেট-২ শাখা</option>
            <option value="Budget-3">বাজেট-৩ শাখা</option>
            <option value="Budget-4">বাজেট-৪ শাখা</option>
            <option value="AdditionalFinance">
              অতিরিক্ত সচিব (আর্থিক ব্যবস্থাপনা)
            </option>
            <option value="JointFinance">যুগ্মসচিব (আর্থিক ব্যবস্থাপনা)</option>
            <option value="JointProject">যুগ্মসচিব (প্রকল্প বাস্তবায়ন)</option>
            <option value="Audit">অডিট শাখা</option>
            <option value="Finance">আর্থিক ব্যবস্থাপনা শাখা</option>
            <option value="Project-1">প্রকল্প বাস্তবায়ন-১</option>
            <option value="Project-2">প্রকল্প বাস্তবায়ন-২</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">বিতরনের তারিখ</level>
          <input
            className="py-2 px-10 text-gray-700 rounded-md  border outline-1 hover:outline-indigo-600 "
            type="date"
            name="designation"
            onChange="{delevarydateHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700"> মালামালের ধরন </level>

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

export default Comsumption;
