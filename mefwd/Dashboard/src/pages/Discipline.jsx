import axios from "axios";
import { useEffect, useState } from "react";

const Discipline = () => {
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
        শৃঙ্খলা
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div className="flex flex-col">
          <label htmlFor="productName" className="text-lg text-gray-700">
            কর্মকর্তার নাম
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
          <label htmlFor="productName" className="text-lg text-gray-700">
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
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="productName" className="text-lg text-gray-700">
            পরিচিতি কোড
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

        {/* Product Description */}
        <div className="flex flex-col">
          <label htmlFor="productDescription" className="text-lg text-gray-700">
            মামলার বিবরণ
          </label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Enter Case description"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          />
        </div>

        {/* Product Image */}
        <div className="flex flex-col">
          <label htmlFor="productImage" className="text-lg text-gray-700">
            সরকারী আদেশ
          </label>
          <input
            type="file"
            id="productImage"
            accept="image/*"
            onChange={(e) => setProductImage(e.target.files[0])}
            className="mt-2 p-2 border border-gray-300 rounded-lg"
            required
            multiple
          />
        </div>

        {/* Product Price */}
        <div className="flex flex-col">
          <level className="text-gray-700 block">প্রতিষ্ঠানের নাম</level>

          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="institute"
            name="institute"
            onChange="{instituteHandler}"
            value=""
          >
            <option>নির্বাচন করুন</option>
            <option>স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ</option>
            <option>পরিবার পরিকল্পনা অধিদপ্তর</option>
            <option>স্বাস্থ্য শিক্ষা অধিদপ্তর</option>
            <option>
              জাতীয় জনসংখ্যা গবেষণা ও প্রশিক্ষণ ইনস্টিটিউট (নিপোর্ট)
            </option>
          </select>
          {/* <label htmlFor="selling price" className="text-lg text-gray-700">
            প্রতিষ্ঠান
          </label>
          <input
            type="number"
            id="setsellingprice"
            value={sellingprice}
            onChange={(e) => setsellingprice(e.target.value)}
            placeholder="Enter product price"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          /> */}
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700 block">মামলার ধরন </level>

          <select
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="catagory"
            name="casecatagory"
            onChange="{casecatagoryHandler}"
            value="{casecatagory.casecatagory}"
          >
            <option>নির্বাচন করুন</option>
            <option>সর্তকতা মুলক</option>
            <option>ইনক্রিমেন্ট স্থগিত</option>
          </select>
        </div>

        <div className="flex flex-col">
          <level className="text-gray-700">সন </level>

          <select
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="year"
            name="year"
            onChange="{yearHandler}"
            value="{year.year}"
          >
            <option>নির্বাচন করুন</option>
            <option>২০২৪</option>
            <option>২০২৩</option>
            <option>২০২২</option>
            <option>২০২১</option>
          </select>
          {/* <label htmlFor="productCategory" className="text-lg text-gray-700">
            Product Category
          </label>
          <select
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          >
            {allcategory?.map((item) => (
              <option key={item._id} value="electronics">
                {item.name}
              </option>
            ))}
          </select> */}
        </div>
        <div className="flex flex-col">
          <level className="text-gray-700">শাস্তির ধরন </level>

          <select
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            id="catagory"
            name="casecatagory"
            onChange="{casecatagoryHandler}"
            value="{casecatagory.casecatagory}"
          >
            <option>নির্বাচন করুন</option>
            <option>সতকর্তামূলক</option>
            <option>ইনক্রিমেন্টজনিত</option>
            <option>নিম্নধাপ</option>
          </select>
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

export default Discipline;
