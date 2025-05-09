import { useState, useEffect } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

const Showleave = () => {
  const [leave, setShowleave] = useState([]);
  const [editleave, setEditLeave] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const fetchShowallleave = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/leave/showleave"
        );
        setShowleave(response.data.data);
      } catch (error) {
        console.error("Error fetching showLeave:", error);
      }
    };
    fetchShowallleave();
  }, []);

  const handleDelete = async (id) => {
    // const token = Cookies.get("token");
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/leave/deleteleave/${id}`
        // {
        //   headers: { Cookie: `token=${token}` },
        //   withCredentials: true,
        // }
      );
      if (response.data.success) {
        setShowleave(leave.filter((leave) => leave._id !== id));
        alert("Leave deleted successfully!");
      } else {
        alert("Failed to delete leave.");
      }
    } catch (error) {
      console.error("Error deleting leave:", error);
      alert("An error occurred while deleting the leave.");
    }
  };

  const handleEditClick = (leave) => {
    setEditLeave(leave);
    setUpdatedData({
      name: leave.name,
      code: leave.code,
      designation: leave.designation,
      institute: leave.institute,
      from: leave.from,
      to: leave.to,
      country: leave.country,
      category: leave.category,
      finance: leave.finance,
      description: leave.description,
      image: null,
    });
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle category update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editleave) return;

    const formData = new FormData();
    formData.append("name", updatedData.name);
    formData.append("code", updatedData.code);
    formData.append("designation", updatedData.designation);
    formData.append("institute", updatedData.institute);
    formData.append("from", updatedData.from);
    formData.append("to", updatedData.to);
    formData.append("country", updatedData.country);
    formData.append("category", updatedData.category);
    formData.append("finance", updatedData.finance);
    formData.append("description", updatedData.description);
    if (updatedData.image) formData.append("image", updatedData.image);

    // const token = Cookies.get("token");

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/leave/updateleave/${editleave._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setShowleave(
          leave.map((lev) =>
            lev._id === editleave._id ? response.data.data : lev
          )
        );
        setEditLeave(null);
        alert("leave updated successfully!");
      } else {
        alert("Failed to update leave.");
      }
    } catch (error) {
      console.error("Error updating leave:", error);
      alert("An error occurred while updating the leave.");
    }
  };

  return (
    <div className="container p-6">
      <h1 className="text-4xl font-bold text-center my-6">Leave Management</h1>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-4 py-2">Doctor Name</th>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Designation</th>
              <th className="px-4 py-2">Institute</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Finance</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leave.map((leave, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{leave.name}</td>
                <td className="px-4 py-2">{leave.code}</td>
                <td className="px-4 py-2">{leave.designation}</td>
                <td className="px-4 py-2">{leave.institute}</td>
                <td className="px-4 py-2">{leave.from}</td>
                <td className="px-4 py-2">{leave.to}</td>
                <td className="px-4 py-2">{leave.country}</td>
                <td className="px-4 py-2">{leave.category}</td>
                <td className="px-4 py-2">{leave.finance}</td>

                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleEditClick(leave)}
                    className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(leave._id)}
                    className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editleave && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Edit Leave</h2>
            <form onSubmit={handleUpdate}>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={updatedData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />

              <label className="block mb-2">Code</label>
              <input
                type="text"
                name="code"
                value={updatedData.code}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <label className="block mb-2">Designation</label>
              <input
                type="text"
                name="designation"
                value={updatedData.designation}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <label className="block mb-2">Institute</label>
              <input
                type="text"
                name="institute"
                value={updatedData.institute}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <label className="block mb-2">From</label>
              <input
                type="date"
                name="from"
                value={updatedData.from}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <label className="block mb-2">To</label>
              <input
                type="date"
                name="to"
                value={updatedData.to}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <label className="block mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={updatedData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <label className="block mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={updatedData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <label className="block mb-2">Finance</label>
              <input
                type="text"
                name="finance"
                value={updatedData.finance}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                required
              />

              <label className="block mb-2">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
              />

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditLeave(null)}
                  className="bg-gray-500 text-white py-1 px-4 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showleave;
