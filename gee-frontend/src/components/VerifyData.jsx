import { useState } from 'react';

export default function VerifyData() {
  const [verifyType, setVerifyType] = useState('certificate');
  const [searchId, setSearchId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await mockVerifyData(verifyType, searchId);
      setResult(response);
    } catch (err) {
      setError('Verification failed. Please try again.',err);
    } finally {
      setLoading(false);
    }
  };

  const mockVerifyData = async (type, id) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockData = {
      certificate: {
        isValid: true,
        certNumber: "CERT-2024-001",
        issueDate: "2024-01-15",
        expiryDate: "2025-01-15"
      },
      agent: {
        isValid: true,
        name: "John Doe",
        agentId: "AGT-001", 
        region: "North"
      },
      warranty: {
        isValid: true,
        productName: "Smart TV X1000",
        purchaseDate: "2023-12-01",
        warrantyEnd: "2024-12-01"
      }
    };

    return mockData[type];
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-24">
      <div className="max-w-2xl mx-auto mb-[300px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 gsap-fade-up">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 mb-8 gsap-slide-up">
          Verify Details
        </h2>

        <form onSubmit={handleVerify} className="space-y-8">
          <div className="gsap-slide-up">
            <label className="block text-gray-700 mb-2 font-medium">Select Verification Type</label>
            <select
              value={verifyType}
              onChange={(e) => setVerifyType(e.target.value)}
              className="w-full text-black p-4 border-2 border-sky-100 rounded-xl focus:ring-2 focus:ring-sky-400 bg-white/50 backdrop-blur-sm transition-all duration-300"
            >
              <option value="certificate">Certificate</option>
              <option value="agent">Agent ID</option>
              <option value="warranty">Warranty</option>
            </select>
          </div>

          <div className="gsap-slide-up">
            <label className="block text-gray-700 mb-2 font-medium">Enter ID/Number</label>
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className=" text-black w-full p-4 border-2 border-sky-100 rounded-xl focus:ring-2 focus:ring-sky-400 bg-white/50 backdrop-blur-sm transition-all duration-300"
              placeholder={`Enter ${verifyType} number`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-sky-500 to-sky-400 text-white py-4 rounded-xl font-semibold hover:from-sky-400 hover:to-sky-500 transition-all disabled:opacity-50 shadow-lg gsap-slide-up"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-100/80 backdrop-blur-sm text-red-700 rounded-xl border border-red-200 gsap-slide-up">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-8 p-6 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 gsap-slide-up">
            <h3 className="text-2xl font-semibold mb-4 text-sky-900">Verification Result</h3>
            <div className="space-y-3">
              {Object.entries(result).map(([key, value]) => (
                <div 
                  key={key}
                  className="flex justify-between items-center py-2 border-b border-gray-100 gsap-slide-up"
                >
                  <span className="font-medium capitalize text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                  <span className={`${typeof value === 'boolean' ? (value ? 'text-green-600' : 'text-red-600') : 'text-sky-700'} font-semibold`}>
                    {typeof value === 'boolean' ? (value ? 'Valid' : 'Invalid') : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
