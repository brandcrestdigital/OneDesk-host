
// // src/components/SuperAdminTable.jsx
// import { useState, useEffect } from "react";
// import AddAdminDrawer from "./AddAdminDrawer";
// import axios from "axios";

// export default function SuperAdminTable() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchAdmins = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://127.0.0.1:8000/api/superadmins");
//       setAdmins(res.data || []);
//     } catch (error) {
//       console.error("Failed to fetch super admins:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAdmins();
//   }, []);

//   return (
//     <>
//       <div className="
//         m-6 rounded-2xl shadow-2xl overflow-hidden border 
//         bg-card-bg border-card-border
//         dark:bg-card-bg dark:border-card-border
//       ">
//         {/* Header */}
//         <div className="
//           px-8 py-7 border-b flex justify-between items-center
//           bg-secondary-bg border-card-border
//           dark:bg-secondary-bg dark:border-card-border
//         ">
//           <div>
//             <h3 className="
//               text-2xl font-bold tracking-tight
//               text-primary-text
//               dark:text-primary-text
//             ">
//               Super Administrators
//             </h3>
//             <p className="
//               mt-1
//               text-secondary-text
//               dark:text-secondary-text
//             ">
//               {admins.length} active {admins.length === 1 ? "account" : "accounts"}
//             </p>
//           </div>

//           <button
//             onClick={() => setOpenDrawer(true)}
//             className="
//               flex items-center gap-2 px-7 py-3 
//               bg-gradient-to-r from-accent-orange-600 to-accent-orange-700 
//               hover:from-accent-orange-700 hover:to-accent-orange-800 
//               text-white font-medium rounded-xl shadow-lg hover:shadow-xl 
//               transition-all duration-200 active:scale-[0.98]
//             "
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
//             </svg>
//             Add Super Admin
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm min-w-[1100px]">
//             <thead className="
//               border-b
//               bg-secondary-bg border-card-border
//               dark:bg-secondary-bg dark:border-card-border
//             ">
//               <tr>
//                 <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">Code</th>
//                 <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">Admin</th>
//                 <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Organization</th>
//                 <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Phone</th>
//                 <th className="text-center py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Role</th>
//                 <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Created</th>
//                 <th className="text-center py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Status</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-card-border dark:divide-card-border">
//               {loading ? (
//                 <tr>
//                   <td colSpan={7} className="py-16 text-center text-secondary-text dark:text-secondary-text">
//                     <div className="flex flex-col items-center gap-3">
//                       <div className="w-8 h-8 border-4 border-accent-orange-500 border-t-transparent rounded-full animate-spin"></div>
//                       <span>Loading super admins...</span>
//                     </div>
//                   </td>
//                 </tr>
//               ) : admins.length === 0 ? (
//                 <tr>
//                   <td colSpan={7} className="py-16 text-center text-secondary-text dark:text-secondary-text">
//                     No super administrators found
//                   </td>
//                 </tr>
//               ) : (
//                 admins.map((admin) => (
//                   <tr
//                     key={admin.id}
//                     className="
//                       hover:bg-accent-orange-950/30 transition-colors duration-150 group
//                       dark:hover:bg-accent-orange-950/40
//                     "
//                   >
//                     <td className="py-5 px-8 font-mono font-medium text-primary-text dark:text-primary-text">
//                       {admin.super_admin_code || "OD-BLR-0001"}
//                     </td>

//                     <td className="py-5 px-8">
//                       <div className="flex items-center gap-4">
//                         <div className="
//                           w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange-600 to-accent-orange-800 
//                           text-white flex items-center justify-center font-bold text-lg shadow-md 
//                           group-hover:shadow-lg transition-shadow
//                         ">
//                           {admin.name?.[0]?.toUpperCase() || "?"}
//                         </div>
//                         <div>
//                           <div className="
//                             font-semibold text-primary-text group-hover:text-accent-orange-400 transition-colors
//                             dark:text-primary-text dark:group-hover:text-accent-orange-300
//                           ">
//                             {admin.name || "—"}
//                           </div>
//                           <div className="text-xs text-secondary-text mt-0.5 dark:text-secondary-text">
//                             {admin.email || "—"}
//                           </div>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="py-5 px-6 text-primary-text dark:text-primary-text">
//                       {admin.organization_name || "—"}
//                       <div className="text-xs text-secondary-text mt-0.5 dark:text-secondary-text">
//                         {admin.business_category || "Not specified"}
//                       </div>
//                     </td>

//                     <td className="py-5 px-6 text-primary-text dark:text-primary-text">
//                       {admin.phone || "—"}
//                     </td>

//                     <td className="py-5 px-6 text-center">
//                       <span className="
//                         px-4 py-1.5 rounded-full text-xs font-medium 
//                         bg-accent-orange-900/60 text-accent-orange-300 
//                         border border-accent-orange-700/50
//                       ">
//                         Super Admin
//                       </span>
//                     </td>

//                     <td className="py-5 px-6 text-secondary-text dark:text-secondary-text">
//                       {admin.created_at
//                         ? new Date(admin.created_at).toLocaleDateString("en-IN", {
//                             day: "2-digit",
//                             month: "short",
//                             year: "numeric",
//                           })
//                         : "—"}
//                     </td>

//                     <td className="py-5 px-6 text-center">
//                       <span
//                         className={`
//                           px-4 py-1.5 rounded-full text-xs font-medium border
//                           ${admin.is_active
//                             ? "bg-green-950/60 text-gain-green border-green-800/50"
//                             : "bg-red-950/60 text-loss-red border-red-800/50"
//                           }
//                         `}
//                       >
//                         {admin.is_active ? "Active" : "Inactive"}
//                       </span>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <AddAdminDrawer
//         isOpen={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         refreshAdmins={fetchAdmins}
//       />
//     </>
//   );
// }

// src/components/SuperAdminTable.jsx
import { useState } from "react";
import AddAdminDrawer from "./AddAdminDrawer";
import { User, Mail, Phone, Building, Calendar, ShieldCheck } from "lucide-react";

// Hardcoded sample data (replace with real API later)
const SAMPLE_ADMINS = [
  {
    id: 1,
    super_admin_code: "OD-BLR-0001",
    name: "Test User One",
    email: "test1@example.com",
    phone: "8956235692",
    organization_name: "TechFlow Solutions",
    business_category: "Software Development",
    created_at: "2026-01-15T10:30:00Z",
    is_active: true,
  },
  {
    id: 2,
    super_admin_code: "OD-DEL-0002",
    name: "Aarav Sharma",
    email: "aarav.sharma@org.in",
    phone: "9876543210",
    organization_name: "DataVerse Corp",
    business_category: "Data Analytics",
    created_at: "2026-01-20T14:15:00Z",
    is_active: false,
  },
  {
    id: 3,
    super_admin_code: "OD-MUM-0003",
    name: "Priya Patel",
    email: "priya.patel@fintech.com",
    phone: "8123456789",
    organization_name: "FinSight Labs",
    business_category: "Financial Services",
    created_at: "2026-02-01T09:45:00Z",
    is_active: true,
  },
  {
    id: 4,
    super_admin_code: "OD-HYD-0004",
    name: "Rahul Verma",
    email: "rahul.v@cloudnine.in",
    phone: "9988776655",
    organization_name: "CloudNine Systems",
    business_category: "Cloud Computing",
    created_at: "2026-02-10T16:20:00Z",
    is_active: false,
  },
];

export default function SuperAdminTable() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [admins] = useState(SAMPLE_ADMINS); // using static data
  const [loading] = useState(false); // no real loading needed for static data

  return (
    <>
      <div className="
        m-6 rounded-2xl shadow-2xl overflow-hidden border 
        bg-card-bg border-card-border
        dark:bg-card-bg dark:border-card-border
      ">
        {/* Header */}
        <div className="
          px-8 py-7 border-b flex justify-between items-center
          bg-secondary-bg border-card-border
          dark:bg-secondary-bg dark:border-card-border
        ">
          <div>
            <h3 className="
              text-2xl font-bold tracking-tight
              text-primary-text
              dark:text-primary-text
            ">
              Super Administrators
            </h3>
            <p className="
              mt-1 text-sm
              text-secondary-text
              dark:text-secondary-text
            ">
              {admins.length} active {admins.length === 1 ? "account" : "accounts"}
            </p>
          </div>

          <button
            onClick={() => setOpenDrawer(true)}
            className="
              flex items-center gap-2 px-6 py-3 
              bg-gradient-to-r from-accent-orange-600 to-accent-orange-700 
              hover:from-accent-orange-700 hover:to-accent-orange-800 
              text-white font-medium rounded-xl shadow-lg hover:shadow-xl 
              transition-all duration-200 active:scale-95
            "
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Add Super Admin
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[1100px]">
            <thead className="
              border-b bg-secondary-bg border-card-border
              dark:bg-secondary-bg dark:border-card-border
            ">
              <tr>
                <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">ID</th>
                <th className="text-left py-4 px-8 font-semibold text-secondary-text dark:text-secondary-text">Admin</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Email</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Organization</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Phone</th>
                {/* <th className="text-center py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Role</th> */}
                <th className="text-left py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Created</th>
                <th className="text-center py-4 px-6 font-semibold text-secondary-text dark:text-secondary-text">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-card-border dark:divide-card-border">
              {admins.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-16 text-center text-secondary-text dark:text-secondary-text">
                    No super administrators found
                  </td>
                </tr>
              ) : (
                admins.map((admin) => (
                  <tr
                    key={admin.id}
                    className="
                      hover:bg-accent-orange-950/20 transition-colors duration-150 group
                      dark:hover:bg-accent-orange-950/30
                    "
                  >
                    {/* Code */}
                    <td className="py-5 px-8 font-mono font-medium text-primary-text dark:text-primary-text">
                      {admin.super_admin_code || "—"}
                    </td>

                    {/* Admin Name + Avatar */}
                    <td className="py-5 px-8">
                      <div className="flex items-center gap-4">
                        <div className="
                          w-11 h-11 rounded-xl bg-gradient-to-br from-accent-orange-600 to-accent-orange-800 
                          text-white flex items-center justify-center font-bold text-lg shadow-md
                        ">
                          {admin.name?.[0]?.toUpperCase() || "?"}
                        </div>
                        <div>
                          <div className="
                            font-semibold text-primary-text group-hover:text-accent-orange-400 transition-colors
                            dark:text-primary-text dark:group-hover:text-accent-orange-300
                          ">
                            {admin.name || "—"}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="py-5 px-6 text-secondary-text dark:text-secondary-text">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent-orange-500" />
                        {admin.email || "—"}
                      </div>
                    </td>

                    {/* Organization */}
                    <td className="py-5 px-6 text-primary-text dark:text-primary-text">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-accent-orange-500" />
                        {admin.organization_name || "—"}
                      </div>
                      <div className="text-xs text-secondary-text mt-1 dark:text-secondary-text">
                        {admin.business_category || "Not specified"}
                      </div>
                    </td>

                    {/* Phone */}
                    <td className="py-5 px-6 text-primary-text dark:text-primary-text">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent-orange-500" />
                        {admin.phone || "—"}
                      </div>
                    </td>

                    {/* Role */}
                    {/* <td className="py-5 px-6 text-center">
                      <span className="
                        px-4 py-1.5 rounded-full text-xs font-medium 
                        bg-accent-orange-900/60 text-accent-orange-300 
                        border border-accent-orange-700/50
                      ">
                        <ShieldCheck className="inline w-3.5 h-3.5 mr-1" />
                        Super Admin
                      </span>
                    </td> */}

                    {/* Created */}
                    <td className="py-5 px-6 text-secondary-text dark:text-secondary-text">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent-orange-500" />
                        {admin.created_at
                          ? new Date(admin.created_at).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "—"}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-5 px-6 text-center">
                      <span
                        className={`
                          px-4 py-1.5 rounded-full text-xs font-medium border
                          ${admin.is_active
                            ? "bg-green-950/60 text-gain-green border-green-800/50"
                            : "bg-red-950/60 text-loss-red border-red-800/50"
                          }
                        `}
                      >
                        {admin.is_active ? "Active" : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddAdminDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        refreshAdmins={() => { /* dummy refresh for static data */ }}
      />
    </>
  );
}