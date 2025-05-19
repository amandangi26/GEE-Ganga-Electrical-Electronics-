import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [formData, setFormData] = useState({
    id: "",
    type: "",
    name: "",
    details: "",
    validFrom: "",
    validUntil: "",
  });
  const [items, setItems] = useState({
    products: [],
    warranties: [],
    agents: [],
    certificates: [],
  });

  // Mock data for the chart
  const chartData = {
    labels: ["Products", "Warranties", "Agents", "Certificates"],
    datasets: [
      {
        label: "Total Items",
        data: [12, 19, 8, 15],
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...formData, id: Date.now().toString() };
    setItems((prev) => ({
      ...prev,
      [activeTab]: [...prev[activeTab], newItem],
    }));
    setFormData({
      id: "",
      type: "",
      name: "",
      details: "",
      validFrom: "",
      validUntil: "",
    });
  };

  const handleDelete = (id) => {
    setItems((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((item) => item.id !== id),
    }));
  };

  const renderDashboard = () => (
    <div className="space-y-6 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(items).map(([key, value]) => (
          <div key={key} className="bg-white p-6 rounded-xl shadow-md ">
            <h3 className="text-lg font-semibold capitalize">{key}</h3>
            <p className="text-3xl font-bold text-sky-600">
              {Math.floor(Math.random() * 100)}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );

  const renderDataTable = () => (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 text-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-2 border rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="p-2 border rounded text-black"
            required
          />
          <textarea
            placeholder="Enter a descripition"
            cols="30"
            rows="6"
            value={formData.details}
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            className="p-2 border rounded text-black"
            required
          ></textarea>

         <textarea
            placeholder="Enter a descripition"
            cols="30"
            rows="6"
            value={formData.details}
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            className="p-2 border rounded text-black"
            required
          ></textarea>
        
         <label htmlFor="purchase" className="block mb-1 font-medium">Date of purchase</label>
         <label htmlFor="end" className="block mb-1 font-medium">Warranty end date</label>

          <input
            type="date"
            name="purchase"
            placeholder="Valid From"
            value={formData.validFrom}
            onChange={(e) =>
              setFormData({ ...formData, validFrom: e.target.value })
            }
            className="p-2 border rounded text-black"
            required
          />
          <input
            type="date"
            name="end"
            placeholder="Valid Until"
            value={formData.validUntil}
            onChange={(e) =>
              setFormData({ ...formData, validUntil: e.target.value })
            }
            className="p-2 border rounded text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
        >
          Add New Item
        </button>
      </form>
  {items[activeTab].length === 0 ? (
          <p className="text-gray-500 italic">No items yet. Add some above! 🚀</p>
        ) :
      <div className="bg-white p-6 rounded-xl shadow-md text-gray-900">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Details</th>
              <th className="text-left p-2">Valid From</th>
              <th className="text-left p-2">Valid Until</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items[activeTab].map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.type}</td>
                <td className="p-2">{item.details}</td>
                <td className="p-2">{item.validFrom}</td>
                <td className="p-2">{item.validUntil}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
      </div>
}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>

        <div className="mb-6">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "dashboard"
                  ? "bg-sky-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Dashboard
            </button>
            {["products", "warranties", "agents", "certificates"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  activeTab === tab
                    ? "bg-sky-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === "dashboard" ? renderDashboard() : renderDataTable()}
      </div>
    </div>
  );
}
