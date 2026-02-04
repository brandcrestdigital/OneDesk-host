
// // src/components/Sidebar.jsx
// import { useState } from "react";
// import {
//   LayoutDashboard,
//   Building2,
//   ShieldCheck,
//   LogOut,
// } from "lucide-react";

// function Sidebar({ currentUser = { name: "Arjun", role: "Super Administrator" } }) {
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const menuItems = [
//     { name: "Dashboard", icon: LayoutDashboard },
//     { name: "Organizations", icon: Building2 },
//     { name: "Super Admins", icon: ShieldCheck },
//   ];

//   return (
//     <aside className="w-72 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 flex flex-col border-r border-gray-800/40 shadow-2xl">
//       {/* Brand / Logo */}
//       <div className="p-6 border-b border-gray-800/60">
//         <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
//           OneDesk Admin
//         </h1>
//       </div>

//       {/* Navigation – exact pill-style orange highlight */}
//       <nav className="flex-1 px-4 py-10 space-y-1.5">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeItem === item.name;

//           return (
//             <div
//               key={item.name}
//               onClick={() => setActiveItem(item.name)}
//               className={`group flex items-center gap-4 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-200 ${
//                 isActive
//                   ? "bg-gradient-to-r from-orange-600/30 to-orange-500/20 text-orange-300 border-l-4 border-orange-500 font-semibold shadow-md"
//                   : "text-gray-300 hover:bg-gray-800/40 hover:text-orange-300 hover:shadow-sm"
//               }`}
//             >
//               <Icon
//                 className={`w-6 h-6 ${isActive ? "text-orange-300" : "text-gray-400 group-hover:text-orange-300"} transition-colors`}
//                 strokeWidth={isActive ? 2.5 : 2}
//               />
//               <span className="text-base font-medium">{item.name}</span>
//             </div>
//           );
//         })}
//       </nav>

//       {/* Bottom User Profile & Logout */}
//       <div className="p-6 border-t border-gray-800/60 bg-black/40">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-xl shadow-lg ring-2 ring-orange-500/40">
//             {currentUser.name?.[0]?.toUpperCase() || "A"}
//           </div>
//           <div>
//             <p className="font-semibold text-gray-100 text-lg">{currentUser.name}</p>
//             <p className="text-sm text-gray-400">{currentUser.role}</p>
//           </div>
//         </div>

//         <button className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-gradient-to-r from-red-700/20 to-red-800/10 hover:from-red-700/30 border border-red-700/40 text-red-300 rounded-2xl font-medium transition-all hover:text-red-200 hover:shadow-md">
//           <LogOut className="w-5 h-5" />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;

// // src/components/Sidebar.jsx
// import { useState } from "react";
// import {
//   Home,
//   CreditCard,
//   BarChart3,
//   History,
//   Send,
//   Settings,
//   Component,
// } from "lucide-react";

// export default function Sidebar() {
//   const [active, setActive] = useState("Overview");

//   const mainItems = [
//     { name: "Overview", icon: Home },
//     { name: "Your Cards", icon: CreditCard },
//     { name: "Analytics", icon: BarChart3 },
//     { name: "Transactions", icon: History },
//     { name: "Fast transfer", icon: Send },
//   ];

//   const bottomItems = [
//     { name: "UI Components", icon: Component },
//     { name: "Settings", icon: Settings },
//   ];

//   return (
//     <aside className="w-64 bg-gradient-to-b from-bg-primary to-black border-r border-gray-800/70 flex flex-col h-screen">
//       {/* Logo */}
//       <div className="p-6 border-b border-gray-800/60">
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-orange-500 to-accent-orange-700 flex items-center justify-center text-white font-bold text-xl shadow-md">
//             S
//           </div>
//           <span className="text-xl font-bold bg-gradient-to-r from-accent-orange-400 to-accent-orange-600 bg-clip-text text-transparent">
//             vira
//           </span>
//         </div>
//       </div>

//       {/* Main menu */}
//       <nav className="flex-1 px-3 py-8 space-y-1.5 overflow-y-auto">
//         {mainItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = active === item.name;
//           return (
//             <button
//               key={item.name}
//               onClick={() => setActive(item.name)}
//               className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl text-sm font-medium transition-all ${
//                 isActive
//                   ? "bg-accent-orange-700/20 text-accent-orange-300 border-l-4 border-accent-orange-500"
//                   : "text-gray-400 hover:bg-gray-800/50 hover:text-accent-orange-300"
//               }`}
//             >
//               <Icon className="w-5 h-5" />
//               {item.name}
//             </button>
//           );
//         })}
//       </nav>

//       {/* Bottom */}
//       <div className="p-4 border-t border-gray-800/60 mt-auto">
//         {bottomItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <button
//               key={item.name}
//               className="w-full flex items-center gap-4 px-5 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 transition-all"
//             >
//               <Icon className="w-5 h-5" />
//               {item.name}
//             </button>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }

// // src/components/Sidebar.jsx
// import { useState } from "react";
// import {
//   Home,
//   CreditCard,
//   BarChart3,
//   History,
//   SendHorizontal,     // better for "fast transfer" (paper plane)
//   Settings,
//   Blocks, ShieldCheck,             // better for "UI Components"
// } from "lucide-react";
// import { Link } from "react-router-dom";
// export default function Sidebar() {
//   const [active, setActive] = useState("Overview");

//   const mainItems = [
//     { name: "Overview", icon: Home },
//     { name: "Super Admin", icon: CreditCard },
//     { name: "Organization", icon: BarChart3 },
//     { name: "Transactions", icon: History },
//     { name: "Fast transfer", icon: SendHorizontal },
//   ];

//   const bottomItems = [
//     { name: "UI Components", icon: Blocks },
//     { name: "Settings", icon: Settings },
//   ];

//   return (
//     <aside 
//       className="
//         w-64 bg-gradient-to-b from-bg-primary to-black 
//         border-r border-gray-800/70 flex flex-col h-screen
//         text-gray-200
//       "
//     >
//       {/* Logo - exact vira style */}
//       <div className="p-6 border-b border-gray-800/60">
//         <div className="flex items-center gap-3">
//           <div className="
//             w-9 h-9 rounded-lg bg-gradient-to-br from-accent-orange-500 to-accent-orange-700 
//             flex items-center justify-center text-white font-bold text-xl shadow-md
//           ">
//             S
//           </div>
//           <span className="
//             text-xl font-bold bg-gradient-to-r from-accent-orange-400 to-accent-orange-600 
//             bg-clip-text text-transparent
//           ">
//             vira
//           </span>
//         </div>
//       </div>

//       {/* Main menu */}
//       <nav className="flex-1 px-3 py-8 space-y-1 overflow-y-auto">
//         {mainItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = active === item.name;

//           return (
//             <button
//               key={item.name}
//               onClick={() => setActive(item.name)}
//               className={`
//                 group relative w-full flex items-center gap-4 px-5 py-3.5 
//                 text-sm font-medium transition-all duration-200
//                 ${isActive 
//                   ? 'text-white font-semibold border-l-4 border-accent-orange-500 bg-gradient-to-r from-accent-orange-900/40 to-transparent'
//                   : 'text-gray-400 hover:bg-gray-800/60 hover:text-gray-200'
//                 }
//                 ${isActive ? 'rounded-r-2xl' : 'rounded-xl'}
//               `}
//             >
//               <Icon 
//                 className={`w-5 h-5 ${isActive ? 'text-accent-orange-400' : 'text-gray-500 group-hover:text-gray-300'}`} 
//               />
//               <span>{item.name}</span>

//               {/* Optional subtle glow on active */}
//               {isActive && (
//                 <div className="absolute inset-y-0 left-0 w-1.5 bg-accent-orange-500/30 blur-sm" />
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       {/* Bottom section */}
//       <div className="p-4 border-t border-gray-800/60 mt-auto">
//         {bottomItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <button
//               key={item.name}
//               className="
//                 w-full flex items-center gap-4 px-5 py-3 rounded-xl 
//                 text-sm font-medium text-gray-400 
//                 hover:bg-gray-800/60 hover:text-gray-200 transition-all
//               "
//             >
//               <Icon className="w-5 h-5" />
//               {item.name}
//             </button>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }

// import { useState } from "react";
// import {
//   Home,
//   ShieldCheck,
//   Building2,
//   History,
//   SendHorizontal,
//   Blocks,
//   Settings,
// } from "lucide-react";

// interface SidebarProps {
//   active: string;
//   onItemClick: (name: string) => void;
// }

// export default function Sidebar({ active, onItemClick }: SidebarProps) {
//   const mainItems = [
//     { name: "Overview", icon: Home },
//     { name: "Super Admin", icon: ShieldCheck },
//     { name: "Organization", icon: Building2 },
//     { name: "Transactions", icon: History },
//     { name: "Fast transfer", icon: SendHorizontal },
//   ];

//   const bottomItems = [
//     { name: "UI Components", icon: Blocks },
//     { name: "Settings", icon: Settings },
//   ];

//   return (
//     <aside
//       className="
//         w-64 bg-gradient-to-b from-bg-primary to-black 
//         border-r border-gray-800/70 flex flex-col h-screen
//         text-gray-200 shadow-xl
//       "
//     >
//       {/* Logo */}
//       <div className="p-6 border-b border-gray-800/60">
//         <div className="flex items-center gap-3">
//           <div
//             className="
//               w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange-500 to-accent-orange-700 
//               flex items-center justify-center text-white font-bold text-2xl shadow-lg
//             "
//           >
//             S
//           </div>
//           <span
//             className="
//               text-2xl font-bold bg-gradient-to-r from-accent-orange-400 to-accent-orange-600 
//               bg-clip-text text-transparent
//             "
//           >
//             vira
//           </span>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto">
//         {mainItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = active === item.name;

//           return (
//             <button
//               key={item.name}
//               onClick={() => onItemClick(item.name)}
//               className={`
//                 group relative w-full flex items-center gap-4 px-5 py-3.5 
//                 rounded-r-2xl text-sm font-medium transition-all duration-200
//                 ${
//                   isActive
//                     ? "text-white font-semibold border-l-4 border-accent-orange-500 bg-gradient-to-r from-accent-orange-900/50 to-transparent"
//                     : "text-gray-400 hover:bg-gray-800/60 hover:text-gray-200"
//                 }
//               `}
//             >
//               <Icon
//                 className={`w-5 h-5 ${
//                   isActive ? "text-accent-orange-400" : "text-gray-500 group-hover:text-gray-300"
//                 }`}
//               />
//               <span>{item.name}</span>

//               {isActive && (
//                 <div className="absolute inset-y-0 left-0 w-2 bg-accent-orange-500/20 blur-sm" />
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       {/* Bottom Section */}
//       <div className="p-4 border-t border-gray-800/60 mt-auto">
//         {bottomItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <button
//               key={item.name}
//               className="
//                 w-full flex items-center gap-4 px-5 py-3 rounded-xl 
//                 text-sm font-medium text-gray-400 
//                 hover:bg-gray-800/60 hover:text-gray-200 transition-all
//               "
//             >
//               <Icon className="w-5 h-5" />
//               {item.name}
//             </button>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }

// src/components/Sidebar.jsx
import {
  Home,
  ShieldCheck,
  Building2,
  History,
  SendHorizontal,
  Blocks,
  Settings,
} from "lucide-react";

export default function Sidebar({ active, onItemClick }) {
  const mainItems = [
    { name: "Overview", icon: Home },
    { name: "Super Admin", icon: ShieldCheck },
    { name: "Organization", icon: Building2 },
    { name: "Transactions", icon: History },
    // { name: "Fast transfer", icon: SendHorizontal },
  ];

  const bottomItems = [
    { name: "UI Components", icon: Blocks },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside
      className="
        w-64 flex flex-col h-screen shadow-2xl transition-colors duration-300
        bg-secondary-bg border-r border-card-border
        dark:bg-secondary-bg dark:border-card-border
      "
    >
      {/* Logo */}
      <div className="p-6 border-b border-card-border dark:border-card-border">
        <div className="flex items-center gap-3">
          {/* <div
            className="
              w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange-600 to-accent-orange-800 
              flex items-center justify-center text-white font-bold text-2xl shadow-lg
            "
          >
            S
          </div> */}
          <span
            className="
              text-2xl font-bold bg-gradient-to-r from-accent-orange-400 to-accent-orange-600 
              bg-clip-text text-transparent
            "
          >
            ONE DESK
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto">
        {mainItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => onItemClick(item.name)}
              className={`
                group relative w-full flex items-center gap-4 px-5 py-3.5 
                rounded-r-2xl text-base font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-primary-text font-semibold border-l-4 border-accent-orange-500 bg-gradient-to-r from-accent-orange-900/60 to-transparent shadow-md"
                    : "text-secondary-text hover:bg-accent-orange-950/40 hover:text-primary-text"
                }
                dark:${isActive 
                  ? "text-primary-text bg-gradient-to-r from-accent-orange-900/60 to-transparent" 
                  : "text-secondary-text hover:bg-accent-orange-950/50 hover:text-primary-text"}
              `}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive 
                    ? "text-accent-orange-400" 
                    : "text-secondary-text group-hover:text-accent-orange-400"
                } dark:${isActive ? "text-accent-orange-400" : "text-secondary-text group-hover:text-accent-orange-300"}`}
              />
              <span>{item.name}</span>

              {isActive && (
                <div className="absolute inset-y-0 left-0 w-2 bg-accent-orange-600/30 blur-sm" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-card-border dark:border-card-border mt-auto">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className="
                w-full flex items-center gap-4 px-5 py-3 rounded-xl 
                text-base font-medium text-secondary-text 
                hover:bg-accent-orange-950/40 hover:text-primary-text 
                transition-all duration-200
                dark:text-secondary-text dark:hover:bg-accent-orange-950/50 dark:hover:text-primary-text
              "
            >
              <Icon className="w-5 h-5 text-secondary-text dark:text-secondary-text" />
              {item.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
}