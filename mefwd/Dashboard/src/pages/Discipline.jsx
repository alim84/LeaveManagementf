import axios from "axios";
import { useState } from "react";

const Discipline = () => {
  const [name, setEmploytName] = useState("");
  const [designation, setDesignation] = useState("");
  const [code, setCode] = useState("");
  const [casedescription, setCaseDescription] = useState("");
  const [image, setGovOrder] = useState(null);
  const [institute, setInstitute] = useState("");
  const [casetype, setCaseType] = useState("");
  const [year, setYear] = useState("");
  const [punishmenttype, setPunishmentType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("designation", designation);
    data.append("code", code);
    data.append("casedescription", casedescription);
    data.append("institute", institute);
    data.append("casetype", casetype);
    data.append("year", year);
    data.append("punismenttype", punishmenttype);

    if (image) {
      data.append("image", image);
    }

    axios
      .post("http://localhost:5000/api/v1/discipline/adddiscipline", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("Success", response.data);
        alert("ডেটা সফলভাবে সংরক্ষণ করা হয়েছে!");
      })
      .catch((error) => {
        console.error(error);
        alert("ডেটা পাঠাতে সমস্যা হয়েছে।");
      });
  };

  return (
    <div className="mx-auto w-[1200px] mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        শৃঙ্খলা
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* কর্মকর্তার নাম */}
        <div className="flex flex-col">
          <label htmlFor="employeeName" className="text-lg text-gray-700">
            কর্মকর্তার নাম
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setEmploytName(e.target.value)}
            placeholder="Enter Employee name"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* পদবি */}
        <div className="flex flex-col">
          <label htmlFor="designation" className="text-lg text-gray-700">
            পদবি
          </label>
          <input
            type="text"
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Enter Designation"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* পরিচিতি কোড */}
        <div className="flex flex-col">
          <label htmlFor="code" className="text-lg text-gray-700">
            পরিচিতি কোড
          </label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Code"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* মামলার বিবরণ */}
        <div className="flex flex-col">
          <label htmlFor="caseDescription" className="text-lg text-gray-700">
            মামলার বিবরণ
          </label>
          <textarea
            id="caseDescription"
            value={casedescription}
            onChange={(e) => setCaseDescription(e.target.value)}
            placeholder="Enter Case description"
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          />
        </div>

        {/* সরকারী আদেশ */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg text-gray-700">
            সরকারী আদেশ (Image Upload)
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setGovOrder(e.target.files[0])}
            className="mt-2 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* প্রতিষ্ঠানের নাম */}
        <div className="flex flex-col">
          <label className="text-gray-700 block">প্রতিষ্ঠানের নাম</label>
          <select
            className="mt-2 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
          >
            <option value="">নির্বাচন করুন</option>
            <option>স্বাস্থ্য শিক্ষা ও পরিবার কল্যাণ বিভাগ</option>
            <option>পরিবার পরিকল্পনা অধিদপ্তর</option>
            <option>স্বাস্থ্য শিক্ষা অধিদপ্তর</option>
            <option>
              জাতীয় জনসংখ্যা গবেষণা ও প্রশিক্ষণ ইনস্টিটিউট (নিপোর্ট)
            </option>
          </select>
        </div>

        {/* মামলার ধরন */}
        <div className="flex flex-col">
          <label className="text-gray-700 block">মামলার ধরন</label>
          <select
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            value={casetype}
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="">নির্বাচন করুন</option>
            <option>সর্তকতা মুলক</option>
            <option>ইনক্রিমেন্ট স্থগিত</option>
          </select>
        </div>

        {/* সন */}
        <div className="flex flex-col">
          <label className="text-gray-700 block">সন</label>
          <select
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">নির্বাচন করুন</option>
            <option>২০২৪</option>
            <option>২০২৩</option>
            <option>২০২২</option>
            <option>২০২১</option>
          </select>
        </div>

        {/* শাস্তির ধরন */}
        <div className="flex flex-col">
          <label className="text-gray-700 block">শাস্তির ধরন</label>
          <select
            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
            value={punishmenttype}
            onChange={(e) => setPunishmentType(e.target.value)}
          >
            <option value="">নির্বাচন করুন</option>
            <option>সতর্কতামূলক</option>
            <option>ইনক্রিমেন্টজনিত</option>
            <option>নিম্নধাপ</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
          >
            সংরক্ষণ করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default Discipline;
