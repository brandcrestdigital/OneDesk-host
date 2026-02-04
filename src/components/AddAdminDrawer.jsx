

// // src/components/AddAdminDrawer.jsx
// import { useState } from "react";
// import axios from "axios";

// export default function AddAdminDrawer({ isOpen, onClose, refreshAdmins }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     organization_name: "",
//     organization_code: "",
//     address: "",
//     business_category: "",
//   });

//   const [error, setError] = useState("");
//   const [fieldErrors, setFieldErrors] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setFieldErrors({});

//     const errors = {};
//     if (!form.name.trim()) errors.name = "Name is required";
//     if (!form.email.includes("@") || !form.email.includes(".")) errors.email = "Valid email required";
//     if (!form.phone.trim() || form.phone.length < 10) errors.phone = "Valid phone required";
//     if (!form.organization_name.trim()) errors.organization_name = "Required";
//     if (!form.organization_code.trim()) errors.organization_code = "Required";

//     if (Object.keys(errors).length > 0) {
//       setFieldErrors(errors);
//       return;
//     }

//     try {
//       await axios.post("http://127.0.0.1:8000/api/superadmins/", form, {
//         headers: { "Content-Type": "application/json" },
//       });

//       refreshAdmins();
//       onClose();
//       setForm({
//         name: "", email: "", phone: "", organization_name: "", organization_code: "", address: "", business_category: "",
//       });
//     } catch (err) {
//       const serverError = err.response?.data;
//       if (serverError && typeof serverError === "object") {
//         setFieldErrors(serverError);
//         setError("Please correct the highlighted fields");
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (fieldErrors[name]) {
//       setFieldErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
//           onClick={onClose}
//         />
//       )}

//       <div
//         className={`
//           fixed top-0 right-0 h-full w-full max-w-[520px] 
//           shadow-2xl z-50 transform transition-transform duration-300 ease-out
//           border-l border-card-border dark:border-card-border
//           bg-card-bg dark:bg-card-bg
//           ${isOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* Header */}
//         <div className="
//           px-8 md:px-10 py-6 border-b 
//           bg-secondary-bg dark:bg-secondary-bg
//           border-card-border dark:border-card-border
//         ">
//           <div className="flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-primary-text dark:text-primary-text">
//                 Create Super Admin
//               </h2>
//               <p className="text-secondary-text dark:text-secondary-text mt-1 text-sm md:text-base">
//                 Add new elevated access account
//               </p>
//             </div>
//             <button
//               onClick={onClose}
//               className="
//                 text-secondary-text hover:text-accent-orange-500 
//                 dark:text-secondary-text dark:hover:text-accent-orange-400 
//                 text-3xl md:text-4xl transition-colors duration-200
//               "
//             >
//               ×
//             </button>
//           </div>
//         </div>

//         {/* Form */}
//         <form 
//           className="p-6 md:p-10 space-y-6 md:space-y-8 overflow-y-auto h-[calc(100vh-140px)]"
//           onSubmit={handleSubmit}
//         >
//           {error && (
//             <div className="
//               bg-loss-red/10 dark:bg-loss-red/20 
//               border border-loss-red/40 dark:border-loss-red/30 
//               text-loss-red px-4 py-3 rounded-xl text-sm
//             ">
//               {error}
//             </div>
//           )}

//           {/* Input fields */}
//           {[
//             { name: "name", label: "Full Name", type: "text" },
//             { name: "email", label: "Email Address", type: "email" },
//             { name: "phone", label: "Phone Number", type: "tel" },
//             { name: "organization_name", label: "Organization Name" },
//             { name: "organization_code", label: "Organization Code" },
//             { name: "business_category", label: "Business Category" },
//             {
//               name: "super_admin_code",
//               label: "Super Admin Code",
//               placeholder: "Auto-generated on save",
//               readOnly: true,
//             },
//           ].map((field) => (
//             <div key={field.name} className="relative">
//               <input
//                 type={field.type || "text"}
//                 name={field.name}
//                 id={field.name}
//                 value={form[field.name] || ""}
//                 onChange={handleChange}
//                 readOnly={field.readOnly}
//                 placeholder={field.placeholder || " "}
//                 className={`
//                   peer w-full px-5 pt-7 pb-2 rounded-xl outline-none transition-all duration-200
//                   border border-card-border dark:border-card-border
//                   bg-secondary-bg dark:bg-secondary-bg
//                   text-primary-text dark:text-primary-text
//                   placeholder:text-secondary-text dark:placeholder:text-secondary-text
//                   ${field.readOnly 
//                     ? "cursor-not-allowed text-secondary-text dark:text-secondary-text italic" 
//                     : "focus:border-accent-orange-500 focus:ring-2 focus:ring-accent-orange-500/20"}
//                   ${fieldErrors[field.name] ? "!border-loss-red focus:!border-loss-red" : ""}
//                 `}
//               />
//               <label
//                 htmlFor={field.name}
//                 className={`
//                   absolute left-5 pointer-events-none transition-all duration-200 text-sm
//                   ${form[field.name] 
//                     ? "text-xs top-2 text-accent-orange-500 dark:text-accent-orange-400 font-medium" 
//                     : "top-5 text-secondary-text dark:text-secondary-text"}
//                 `}
//               >
//                 {field.label}
//               </label>
//               {fieldErrors[field.name] && (
//                 <p className="text-loss-red dark:text-loss-red text-xs mt-1.5 ml-1">
//                   {fieldErrors[field.name]}
//                 </p>
//               )}
//             </div>
//           ))}

//           {/* Address textarea */}
//           <div className="relative">
//             <textarea
//               name="address"
//               id="address"
//               value={form.address}
//               onChange={handleChange}
//               rows={4}
//               className="
//                 peer w-full px-5 pt-7 pb-2 rounded-xl outline-none transition-all duration-200
//                 border border-card-border dark:border-card-border
//                 bg-secondary-bg dark:bg-secondary-bg
//                 text-primary-text dark:text-primary-text
//                 placeholder:text-secondary-text dark:placeholder:text-secondary-text
//                 focus:border-accent-orange-500 focus:ring-2 focus:ring-accent-orange-500/20
//                 resize-none
//               "
//               placeholder=" "
//             />
//             <label
//               htmlFor="address"
//               className={`
//                 absolute left-5 pointer-events-none transition-all duration-200 text-sm
//                 ${form.address 
//                   ? "text-xs top-2 text-accent-orange-500 dark:text-accent-orange-400 font-medium" 
//                   : "top-5 text-secondary-text dark:text-secondary-text"}
//               `}
//             >
//               Full Address
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="
//               w-full py-4 mt-6 
//               bg-gradient-to-r from-accent-orange-600 to-accent-orange-700 
//               hover:from-accent-orange-700 hover:to-accent-orange-800 
//               text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
//               transition-all duration-200 active:scale-[0.98] 
//               flex items-center justify-center gap-2
//             "
//           >
//             Create Super Admin Account
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// src/components/AddAdminDrawer.jsx
import { useState } from "react";
import axios from "axios";

export default function AddAdminDrawer({ isOpen, onClose, refreshAdmins }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization_name: "",
    address: "",
    business_category: "",
  });

  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.includes("@") || !form.email.includes(".")) errors.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 10) errors.phone = "Valid phone required";
    if (!form.organization_name.trim()) errors.organization_name = "Organization name is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/superadmins/", form, {
        headers: { "Content-Type": "application/json" },
      });

      refreshAdmins();
      onClose();
      setForm({
        name: "",
        email: "",
        phone: "",
        organization_name: "",
        address: "",
        business_category: "",
      });
    } catch (err) {
      const serverError = err.response?.data;
      if (serverError && typeof serverError === "object") {
        setFieldErrors(serverError);
        setError("Please correct the highlighted fields");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-[520px] 
          shadow-2xl z-50 transform transition-transform duration-300 ease-out
          border-l border-card-border dark:border-card-border
          bg-card-bg dark:bg-card-bg
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="
          px-8 md:px-10 py-6 border-b 
          bg-secondary-bg dark:bg-secondary-bg
          border-card-border dark:border-card-border
        ">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-text dark:text-primary-text">
                Create Super Admin
              </h2>
              <p className="text-secondary-text dark:text-secondary-text mt-1 text-sm md:text-base">
                Add new elevated access account
              </p>
            </div>
            <button
              onClick={onClose}
              className="
                text-secondary-text hover:text-accent-orange-500 
                dark:text-secondary-text dark:hover:text-accent-orange-400 
                text-3xl md:text-4xl transition-colors duration-200
              "
            >
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <form 
          className="p-6 md:p-10 space-y-6 md:space-y-8 overflow-y-auto h-[calc(100vh-140px)]"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="
              bg-loss-red/10 dark:bg-loss-red/20 
              border border-loss-red/40 dark:border-loss-red/30 
              text-loss-red px-4 py-3 rounded-xl text-sm
            ">
              {error}
            </div>
          )}

          {/* Input fields - removed organization_code & super_admin_code */}
          {[
            { name: "name", label: "Full Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "phone", label: "Phone Number", type: "tel" },
            { name: "organization_name", label: "Organization Name" },
            { name: "business_category", label: "Business Category" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type || "text"}
                name={field.name}
                id={field.name}
                value={form[field.name] || ""}
                onChange={handleChange}
                placeholder=" "
                className={`
                  peer w-full px-5 pt-7 pb-2 rounded-xl outline-none transition-all duration-200
                  border border-card-border dark:border-card-border
                  bg-secondary-bg dark:bg-secondary-bg
                  text-primary-text dark:text-primary-text
                  placeholder:text-secondary-text dark:placeholder:text-secondary-text
                  focus:border-accent-orange-500 focus:ring-2 focus:ring-accent-orange-500/20
                  ${fieldErrors[field.name] ? "!border-loss-red focus:!border-loss-red" : ""}
                `}
              />
              <label
                htmlFor={field.name}
                className={`
                  absolute left-5 pointer-events-none transition-all duration-200 text-sm
                  ${form[field.name] 
                    ? "text-xs top-2 text-accent-orange-500 dark:text-accent-orange-400 font-medium" 
                    : "top-5 text-secondary-text dark:text-secondary-text"}
                `}
              >
                {field.label}
              </label>
              {fieldErrors[field.name] && (
                <p className="text-loss-red dark:text-loss-red text-xs mt-1.5 ml-1">
                  {fieldErrors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Address textarea */}
          <div className="relative">
            <textarea
              name="address"
              id="address"
              value={form.address}
              onChange={handleChange}
              rows={4}
              className="
                peer w-full px-5 pt-7 pb-2 rounded-xl outline-none transition-all duration-200
                border border-card-border dark:border-card-border
                bg-secondary-bg dark:bg-secondary-bg
                text-primary-text dark:text-primary-text
                placeholder:text-secondary-text dark:placeholder:text-secondary-text
                focus:border-accent-orange-500 focus:ring-2 focus:ring-accent-orange-500/20
                resize-none
              "
              placeholder=" "
            />
            <label
              htmlFor="address"
              className={`
                absolute left-5 pointer-events-none transition-all duration-200 text-sm
                ${form.address 
                  ? "text-xs top-2 text-accent-orange-500 dark:text-accent-orange-400 font-medium" 
                  : "top-5 text-secondary-text dark:text-secondary-text"}
              `}
            >
              Full Address
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full py-4 mt-8 
              bg-gradient-to-r from-accent-orange-600 to-accent-orange-700 
              hover:from-accent-orange-700 hover:to-accent-orange-800 
              text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
              transition-all duration-200 active:scale-[0.98] 
              flex items-center justify-center gap-2
            "
          >
            Create Super Admin Account
          </button>
        </form>
      </div>
    </>
  );
}