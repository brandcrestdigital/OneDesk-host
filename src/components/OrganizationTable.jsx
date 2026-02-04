// // src/components/OrganizationTable.jsx
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Building, Mail, Phone, User, Hash, Code } from "lucide-react";

// export default function OrganizationTable() {
//   const [organizations, setOrganizations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrganizations = async () => {
//     try {
//       setLoading(true);
//       // Replace with your actual API endpoint
//       const res = await axios.get("http://127.0.0.1:8000/api/organizations/");
//       setOrganizations(res.data || []);
//     } catch (error) {
//       console.error("Failed to fetch organizations:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrganizations();
//   }, []);

//   // Optional: sample data if API is not ready
//   const sampleData = [
//     {
//       org_id: "550e8400-e29b-41d4-a716-446655440000",
//       org_code: "OD-BLR-0001",
//       organization_name: "TechFlow Solutions",
//       primary_admin_name: "Test User One",
//       mobile: "8956235692",
//       email: "test1@example.com",
//     },
//     {
//       org_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
//       org_code: "OD-DEL-0002",
//       organization_name: "DataVerse Corp",
//       primary_admin_name: "Aarav Sharma",
//       mobile: "9876543210",
//       email: "aarav.sharma@org.in",
//     },
//     {
//       org_id: "8f14e45f-9c3e-4f2a-8c1d-6b7e8f9a0b1c",
//       org_code: "OD-MUM-0003",
//       organization_name: "FinSight Labs",
//       primary_admin_name: "Priya Patel",
//       mobile: "8123456789",
//       email: "priya.patel@fintech.com",
//     },
//   ];

//   const dataToShow = organizations.length > 0 ? organizations : sampleData;

//   return (
//     <div className="
//       m-6 rounded-2xl shadow-2xl overflow-hidden border 
//       bg-card-bg border-card-border
//       dark:bg-card-bg dark:border-card-border
//     ">
//       {/* Header */}
//       <div className="
//         px-8 py-7 border-b flex justify-between items-center
//         bg-secondary-bg border-card-border
//         dark:bg-secondary-bg dark:border-card-border
//       ">
//         <div>
//           <h3 className="
//             text-2xl font-bold tracking-tight
//             text-primary-text
//             dark:text-primary-text
//           ">
//             Organizations
//           </h3>
//           <p className="
//             mt-1 text-sm
//             text-secondary-text
//             dark:text-secondary-text
//           ">
//             {dataToShow.length} registered {dataToShow.length === 1 ? "organization" : "organizations"}
//           </p>
//         </div>

//         {/* Optional: Add New Organization button */}
//         <button
//           className="
//             flex items-center gap-2 px-6 py-3 
//             bg-gradient-to-r from-accent-orange-600 to-accent-orange-700 
//             hover:from-accent-orange-700 hover:to-accent-orange-800 
//             text-white font-medium rounded-xl shadow-lg hover:shadow-xl 
//             transition-all duration-200 active:scale-95
//           "
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
//           </svg>
//           Add Organization
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm min-w-[1100px]">
//           <thead className="
//             border-b bg-secondary-bg border-card-border
//             dark:bg-secondary-bg dark:border-card-border
//           ">
//             <tr>
//               <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">Org Code</th>
//               <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">Organization Name</th>
//               <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Primary Admin</th>
//               <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Mobile</th>
//               <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Email</th>
//               <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Org ID</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-card-border dark:divide-card-border">
//             {dataToShow.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="py-16 text-center text-secondary-text dark:text-secondary-text">
//                   No organizations registered yet
//                 </td>
//               </tr>
//             ) : (
//               dataToShow.map((org) => (
//                 <tr
//                   key={org.org_id}
//                   className="
//                     hover:bg-accent-orange-950/20 transition-colors duration-150 group
//                     dark:hover:bg-accent-orange-950/30
//                   "
//                 >
//                   {/* Org Code */}
//                   <td className="py-5 px-8 font-mono font-medium text-primary-text dark:text-primary-text">
//                     <div className="flex items-center gap-2">
//                       {/* <Code className="w-4 h-4 text-accent-orange-500" /> */}
//                       {org.org_code || "—"}
//                     </div>
//                   </td>

//                   {/* Organization Name */}
//                   <td className="py-5 px-8 text-primary-text dark:text-primary-text">
//                     <div className="flex items-center gap-3">
//                       <div className="
//                         w-10 h-10 rounded-lg bg-gradient-to-br from-accent-orange-600/30 to-accent-orange-800/30 
//                         flex items-center justify-center text-accent-orange-400
//                       ">
//                         <Building className="w-5 h-5" />
//                       </div>
//                       {org.organization_name || "—"}
//                     </div>
//                   </td>

//                   {/* Primary Admin Name */}
//                   <td className="py-5 px-6 text-primary-text dark:text-primary-text">
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4 text-accent-orange-500" />
//                       {org.primary_admin_name || "—"}
//                     </div>
//                   </td>

//                   {/* Mobile */}
//                   <td className="py-5 px-6 text-primary-text dark:text-primary-text">
//                     <div className="flex items-center gap-2">
//                       <Phone className="w-4 h-4 text-accent-orange-500" />
//                       {org.mobile || "—"}
//                     </div>
//                   </td>

//                   {/* Email */}
//                   <td className="py-5 px-6 text-secondary-text dark:text-secondary-text">
//                     <div className="flex items-center gap-2">
//                       <Mail className="w-4 h-4 text-accent-orange-500" />
//                       {org.email || "—"}
//                     </div>
//                   </td>

//                   {/* Org ID */}
//                   <td className="py-5 px-6 font-mono text-secondary-text dark:text-secondary-text text-xs">
//                     {org.org_id || "—"}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// src/components/OrganizationTable.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Building, Mail, Phone, User, Hash, Code, RefreshCw, Plus } from "lucide-react";

export default function OrganizationTable() {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrganizations = async () => {
    try {
      setLoading(true);
      // Replace with your real API endpoint when ready
      const res = await axios.get("http://127.0.0.1:8000/api/organizations/");
      setOrganizations(res.data || []);
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  // Sample data (fallback when API is not ready)
  const sampleData = [
    {
      org_id: "550e8400-e29b-41d4-a716-446655440000",
      org_code: "OR-BLR-0001",
      organization_name: "TechFlow Solutions",
      primary_admin_name: "Test User One",
      mobile: "8956235692",
      email: "test1@example.com",
    },
    {
      org_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
      org_code: "OR-DEL-0002",
      organization_name: "DataVerse Corp",
      primary_admin_name: "Aarav Sharma",
      mobile: "9876543210",
      email: "aarav.sharma@org.in",
    },
    {
      org_id: "8f14e45f-9c3e-4f2a-8c1d-6b7e8f9a0b1c",
      org_code: "OR-MUM-0003",
      organization_name: "FinSight Labs",
      primary_admin_name: "Priya Patel",
      mobile: "8123456789",
      email: "priya.patel@fintech.com",
    },
  ];

  const dataToShow = organizations.length > 0 ? organizations : sampleData;

  return (
    <div className="
      m-6 rounded-2xl shadow-2xl overflow-hidden border 
      bg-card-bg border-card-border
      dark:bg-card-bg dark:border-card-border
    ">
      {/* Header with buttons */}
      <div className="
        px-8 py-7 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4
        bg-secondary-bg border-card-border
        dark:bg-secondary-bg dark:border-card-border
      ">
        <div>
          <h3 className="
            text-2xl font-bold tracking-tight
            text-primary-text
            dark:text-primary-text
          ">
            Organizations
          </h3>
          <p className="
            mt-1 text-sm
            text-secondary-text
            dark:text-secondary-text
          ">
            {dataToShow.length} registered {dataToShow.length === 1 ? "organization" : "organizations"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Refresh Button */}
          <button
            onClick={fetchOrganizations}
            disabled={loading}
            className="
              flex items-center gap-2 px-5 py-2.5 
              bg-accent-orange-900/30 hover:bg-accent-orange-900/50 
              text-accent-orange-400 hover:text-accent-orange-300 
              font-medium rounded-xl border border-accent-orange-800/50
              transition-all duration-200 active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Refreshing..." : "Refresh List"}
          </button>

          {/* Add New Organization Button */}
          {/* <button
            className="
              flex items-center gap-2 px-6 py-3 
              bg-gradient-to-r from-accent-orange-600 to-accent-orange-700 
              hover:from-accent-orange-700 hover:to-accent-orange-800 
              text-white font-medium rounded-xl shadow-lg hover:shadow-xl 
              transition-all duration-200 active:scale-95
            "
            onClick={() => {
              // TODO: Open Add Organization drawer/modal here
              alert("Add new organization form coming soon...");
            }}
          >
            <Plus className="w-5 h-5" />
            Add Organization
          </button> */}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[1100px]">
          <thead className="
            border-b bg-secondary-bg border-card-border
            dark:bg-secondary-bg dark:border-card-border
          ">
            <tr>
              <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">Org Code</th>
              <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">Organization Name</th>
              <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Primary Admin</th>
              <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Mobile</th>
              <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Email</th>
              <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Org ID</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-card-border dark:divide-card-border">
            {dataToShow.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-16 text-center text-secondary-text dark:text-secondary-text">
                  No organizations registered yet
                </td>
              </tr>
            ) : (
              dataToShow.map((org) => (
                <tr
                  key={org.org_id}
                  className="
                    hover:bg-accent-orange-950/20 transition-colors duration-150 group
                    dark:hover:bg-accent-orange-950/30
                  "
                >
                  {/* Org Code */}
                  <td className="py-5 px-8 font-mono font-medium text-primary-text dark:text-primary-text">
                    <div className="flex items-center gap-2">
                      {/* <Code className="w-4 h-4 text-accent-orange-500" /> */}
                      {org.org_code || "—"}
                    </div>
                  </td>

                  {/* Organization Name */}
                  <td className="py-5 px-8 text-primary-text dark:text-primary-text">
                    <div className="flex items-center gap-3">
                      <div className="
                        w-10 h-10 rounded-lg bg-gradient-to-br from-accent-orange-600/30 to-accent-orange-800/30 
                        flex items-center justify-center text-accent-orange-400
                      ">
                        <Building className="w-5 h-5" />
                      </div>
                      {org.organization_name || "—"}
                    </div>
                  </td>

                  {/* Primary Admin Name */}
                  <td className="py-5 px-6 text-primary-text dark:text-primary-text">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-accent-orange-500" />
                      {org.primary_admin_name || "—"}
                    </div>
                  </td>

                  {/* Mobile */}
                  <td className="py-5 px-6 text-primary-text dark:text-primary-text">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent-orange-500" />
                      {org.mobile || "—"}
                    </div>
                  </td>

                  {/* Email */}
                  <td className="py-5 px-6 text-secondary-text dark:text-secondary-text">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent-orange-500" />
                      {org.email || "—"}
                    </div>
                  </td>

                  {/* Org ID */}
                  <td className="py-5 px-6 font-mono text-secondary-text dark:text-secondary-text text-xs break-all">
                    {org.org_id || "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}