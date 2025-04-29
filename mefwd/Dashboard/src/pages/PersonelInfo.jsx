import axios from "axios";
import { useEffect, useState } from "react";

const PersonelInfo = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [sellingprice, setsellingprice] = useState("");
  const [discountprice, setdiscountprice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [allcategory, setAllcategory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, like sending the data to an API
    console.log({
      productName,
      productDescription,
      productImage,
      sellingprice,
      productCategory,
    });
  };
  useEffect(() => {
    async function getAllCategory() {
      axios
        .get("http://localhost:5000/api/v1/category/allcategory")
        .then((data) => {
          setAllcategory(data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <div className=" mx-auto w-[1200px] mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        ব্যক্তিগত তথ্য
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div className="flex flex-col">
          <label htmlFor="productName" className="text-lg text-gray-700">
            কর্মকর্তা/কর্মচারীর নাম
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter Employee name"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">পদবি :</level>
          <select
            className="mt-2 p-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="designation"
            name="designation"
            onChange="{designationHandler}"
          >
            <option>নির্বাচন করুন</option>

            <option>প্রোগ্রামার</option>
            <option>সহকারী সচিব</option>
            <option>হিসাব রক্ষণ কর্মকর্তা</option>
            <option>সহকারী মেইনট্যানেন্স ইঞ্জিনিয়ার</option>
            <option>লাইব্রেরিয়ান</option>
            <option>প্রশাসনিক কর্মকর্তা</option>
            <option>ব্যক্তিগত কর্মকর্তা</option>
            <option>সহকারী হিসাব রক্ষণ কর্মকর্তা</option>
            <option>ক্যাশিয়ার</option>
            <option>কম্পিউটার অপারেটর</option>
            <option>সাঁট মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</option>
            <option>অফিস সহকারী কাম কম্পিউটার অপারেটর</option>
            <option>অফিস সহায়ক</option>
          </select>
          {/* <label htmlFor="productName" className="text-lg text-gray-700">
            পদবি
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter Employee Designation"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          /> */}
        </div>

        <div className="flex flex-col">
          <level className="text-gray-700">গ্রেড :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="designation"
            name="designation"
            onChange="{gradeHandler}"
          >
            <option>নির্বাচন করুন</option>
            <option>গ্রেড-১ ৭৮০০০ (নির্ধারিত)</option>
            <option>গ্রেড-২ (৬৬০০০-৭৯৪৯০)</option>
            <option>গ্রেড-৩ (৫৬৫০০-৭৪৪০০)</option>
            <option>গ্রেড-৪ (৫০০০০-৭১২০০)</option>
            <option>গ্রেড-৫ (৪৩০০০-৬৯৮৫০)</option>
            <option>গ্রেড-৬ (৩৫৫০০-৬৭০১০)</option>
            <option>গ্রেড-৭ (২৯০০০-৬৩৪১০)</option>
            <option>গ্রেড-৮ (২৩০০০-৫৫৪৬০)</option>
            <option>গ্রেড-৯ (২২০০০-৫৩০৬০)</option>
            <option>গ্রেড-১০ (১৬০০০-৩৮৬৪০)</option>
            <option>গ্রেড-১১ (১২৫০০-৩২২৪০)</option>
            <option>গ্রেড-১২ (১১৩০০-২৭৩০০)</option>
            <option>গ্রেড-১৩ (১১০০০-২৬৫৯০)</option>
            <option>গ্রেড-১৪ (১০২০০-২৪৬৮০)</option>
            <option>গ্রেড-১৫ (৯৭০০-২৩৪৯০)</option>
            <option>গ্রেড-১৬ (৯৩০০-২২৪৯০)</option>
            <option>গ্রেড-১৭ (৯০০০-২১৮০০)</option>
            <option>গ্রেড-১৮ (৮৮০০-২১৩১০)</option>
            <option>গ্রেড-১৯ (৮৫০০-২০৫৭০) </option>
            <option>গ্রেড-২০ (৮২৫০-২০০১০)</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700 block">শাখা/অধিশাখা/অনুবিভাগ :</level>

          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="designation"
            name="designation"
            onChange="{sectionHandler}"
          >
            <option>নির্বাচন করুন</option>
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

        {/* Product Description */}
        <div className="flex flex-col">
          <level className="text-lg text-gray-700">মোবাইল নাম্বার</level>

          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="মোবাইল নাম্বার "
            type="text"
            name="name"
            onChange="{mobileHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">ই-মেইল :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="ই-মেইল"
            type="email"
            name="name"
            onChange="{emailHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">জন্মতারিখ :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            type="date"
            name="name"
            onChange="{birthHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">জেন্ডার :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="gender"
            name="gender"
            onChange="{gengerHandler}"
          >
            <option value="male">নির্বাচন করুন</option>
            <option value="male">পুরুষ</option>
            <option value="Female">মহিলা</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">বৈবাহিক অবস্থা :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="mariul status"
            name="mariul status"
            onChange="{meritalHandler}"
          >
            <option value="male">নির্বাচন করুন</option>
            <option value="male">বিবাহিত</option>
            <option value="Female">অবিবাহিত</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">ধর্ম :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="religion"
            name="religion"
            onChange="{religionHandler}"
          >
            <option value="male">নির্বাচন করুন</option>
            <option value="male">ইসলাম</option>
            <option value="Female">হিন্দু</option>
            <option value="Female">খ্রিস্ট্রান</option>
            <option value="Female">বৌদ্ধ</option>
            <option value="Female">অন্যান্য</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">নিজ জেলা :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="selfdist"
            name="selfdist"
            onChange="{homedristrictHandler}"
          >
            {/* {districts.map((item, index) => (
                      <option key={index} value={item.district_name}>
                        {item.district_name}
                      </option>
                    ))} */}
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">বিভাগ :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="division"
            name="division"
            onChange="{perdivisionHandler}"
          >
            {/* {divisions.map((item) => (
                      <option value={item.division_name}>
                        {item.division_name}
                      </option>
                    ))} */}
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">জেলা :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="dist"
            name="dist"
            onChange="{perdristrictHandler}"
          >
            {/* {districts.map((item) => (
                      <option value={item.district_name}>
                        {item.district_name}
                      </option>
                    ))} */}
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">উপজেলা :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="upzila"
            name="upzila"
            onChange="{perthanaHandler}"
          >
            {/* {upzilas.map((item) => (
                      <option value={item.upazila_name}>
                        {item.upazila_name}
                      </option>
                    ))} */}
          </select>
        </div>

        <div className="flex flex-col">
          <level className="text-gray-700">পোস্ট অফিস :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700"> গ্রাম/মহল্লা/ওয়ার্ড :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">রাস্তা নং :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">বাড়ি নং :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">বিভাগ :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="division"
            name="division"
            onChange="{perdivisionHandler}"
          >
            {/* {divisions.map((item) => (
                      <option value={item.division_name}>
                        {item.division_name}
                      </option>
                    ))} */}
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">জেলা :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="dist"
            name="dist"
            onChange="{perdristrictHandler}"
          >
            {/* {districts.map((item) => (
                      <option value={item.district_name}>
                        {item.district_name}
                      </option>
                    ))} */}
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">উপজেলা :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="upzila"
            name="upzila"
            onChange="{perthanaHandler}"
          >
            {/* {upzilas.map((item) => (
                      <option value={item.upazila_name}>
                        {item.upazila_name}
                      </option>
                    ))} */}
          </select>
        </div>

        <div className="flex flex-col">
          <level className="text-gray-700">পোস্ট অফিস :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700"> গ্রাম/মহল্লা/ওয়ার্ড :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">রাস্তা নং :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">বাড়ি নং :</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="পোস্ট অফিস "
            type="text"
            name="name"
            onChange="{perpostHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">নিয়োগের ধরন :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="apptype"
            name="apptype"
            onChange="{appcatagoryHandler}"
          >
            <option value="dist">নির্বাচন করুন</option>
            <option value="dist">সরাসরি</option>
            <option value="dist">রাজস্ব</option>
            <option value="dist">অস্থায়ী</option>
            <option value="dist">চুক্তি ভিত্তিক</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">প্রথম যোগদানের তারিখ:</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            type="date"
            name="name"
            onChange="{firstJointdateHandler}"
          ></input>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">পদবি :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="designation"
            name="designation"
            onChange="{firstdesignationHandler}"
          >
            <option>নির্বাচন করুন</option>
            <option>সিস্টেম এনালিস্ট</option>
            <option>প্রোগ্রামার</option>
            <option>সহকারী সচিব</option>
            <option>হিসাব রক্ষণ কর্মকর্তা</option>
            <option>সহকারী মেইনট্যানেন্স ইঞ্জিনিয়ার</option>
            <option>লাইব্রেরিয়ান</option>
            <option>প্রশাসনিক কর্মকর্তা</option>
            <option>ব্যক্তিগত কর্মকর্তা</option>
            <option>সহকারী হিসাব রক্ষণ কর্মকর্তা</option>
            <option>ক্যাশিয়ার</option>
            <option>কম্পিউটার অপারেটর</option>
            <option>সাঁট মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</option>
            <option>অফিস সহকারী কাম কম্পিউটার অপারেটর</option>
            <option>অফিস সহায়ক</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">বেতন স্কেল :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="designation"
            name="designation"
            onChange="{scaleHandler}"
          >
            <option>নির্বাচন করুন</option>
            <option>(20)-8100X20---23000X15</option>
            <option>(20)-8100X20---23000X15</option>
            <option>(20)-8100X20---23000X15</option>
            <option>(20)-8100X20---23000X15</option>
            <option>(20)-8100X20---23000X15</option>
            <option>(20)-8100X20---23000X15</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">পদোন্নতির পদবি :</level>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="designation"
            name="designation"
            onChange="{promotionHandler}"
          >
            <option>নির্বাচন করুন</option>
            <option>সিস্টেম এনালিস্ট</option>
            <option>প্রোগ্রামার</option>
            <option>সহকারী সচিব</option>
            <option>হিসাব রক্ষণ কর্মকর্তা</option>
            <option>সহকারী মেইনট্যানেন্স ইঞ্জিনিয়ার</option>
            <option>লাইব্রেরিয়ান</option>
            <option>প্রশাসনিক কর্মকর্তা</option>
            <option>ব্যক্তিগত কর্মকর্তা</option>
            <option>সহকারী হিসাব রক্ষণ কর্মকর্তা</option>
            <option>ক্যাশিয়ার</option>
            <option>কম্পিউটার অপারেটর</option>
            <option>সাঁট মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</option>
            <option>অফিস সহকারী কাম কম্পিউটার অপারেটর</option>
            <option>অফিস সহায়ক</option>
          </select>
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">পদোন্নতির তারিখ:</level>
          <input
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="Enter Your Name"
            type="date"
            name="name"
            onChange="{promotionjoindateHandler}"
          ></input>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-3 mt-4 p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
          >
            সংরক্ষণ করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonelInfo;
