
// import { Bell, Search, Globe, ChevronDown } from "lucide-react";

// export default function Header({ userName = "Arjun" }) {
//   return (
//     <header className="flex items-center justify-between px-6 md:px-10 py-4 bg-black/75 backdrop-blur-2xl border-b border-gray-800/60 shadow-2xl sticky top-0 z-50">
//       {/* Left: Greeting – exact style from reference */}
//       <div className="flex items-center gap-4">
//         <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
//           Good morning, <span className="text-orange-400">{userName}</span> 👋
//         </h1>
//       </div>

//       {/* Right: Controls – exact layout & icons from reference */}
//       <div className="flex items-center gap-4 md:gap-6">
//         {/* Country / Language dropdown */}
//         <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/70 rounded-full hover:bg-gray-800 transition text-gray-300 text-sm font-medium">
//           <span className="text-lg">🇺🇸</span>
//           <span>US</span>
//           <ChevronDown className="w-4 h-4 opacity-70" />
//         </button>

//         {/* Notification bell with badge */}
//         <button className="relative p-3 rounded-full bg-gray-900/70 hover:bg-gray-800 transition text-gray-300 hover:text-orange-300">
//           <Bell className="w-6 h-6" strokeWidth={2} />
//           <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-red-500/40">
//             2
//           </span>
//         </button>

//         {/* Search input (desktop) */}
//         <div className="relative hidden md:block">
//           <input
//             type="text"
//             placeholder="Search admins, organizations, tickets..."
//             className="w-80 pl-11 pr-5 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
//           />
//           <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//         </div>

//         {/* Mobile search icon */}
//         <button className="p-3 rounded-full bg-gray-900/70 hover:bg-gray-800 transition text-gray-300 hover:text-orange-300 md:hidden">
//           <Search className="w-6 h-6" />
//         </button>

//         {/* User avatar + name */}
//         <button className="flex items-center gap-3 hover:opacity-90 transition">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-lg shadow-lg ring-2 ring-orange-500/40">
//             {userName?.[0]?.toUpperCase() || "A"}
//           </div>
//           <span className="hidden md:block font-medium text-white">{userName}</span>
//         </button>
//       </div>
//     </header>
//   );
// }


// // src/components/Header.jsx
// import { Bell, Search, Globe, ChevronDown, User } from "lucide-react";

// export default function Header({ name = "John Carter" }) {
//   return (
//     <header className="bg-bg-secondary/80 backdrop-blur-xl border-b border-gray-800/60 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
//       <div className="flex items-center gap-10">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-orange-500 to-accent-orange-700 flex items-center justify-center">
//             <span className="text-white font-bold">S</span>
//           </div>
//           <h1 className="text-xl font-semibold">Dashboard</h1>
//         </div>
//       </div>

//       <div className="flex items-center gap-5">
//         <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 rounded-full text-sm">
//           <Globe className="w-4 h-4" />
//           <span>US</span>
//           <ChevronDown className="w-4 h-4" />
//         </div>

//         <button className="relative p-2.5 hover:bg-gray-800/60 rounded-full transition">
//           <Bell className="w-5 h-5" />
//           <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">
//             2
//           </span>
//         </button>

//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-orange-500 to-amber-600 flex items-center justify-center font-bold text-white shadow-md">
//             {name[0]}
//           </div>
//           <span className="font-medium">{name}</span>
//         </div>
//       </div>
//     </header>
//   );
// }

import { Bell, Globe, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header({ name = "Admin" }) {
  return (
    <header 
      className="
        bg-bg-dark dark:bg-bg-dark 
        border-b border-accent-orange-900/30 
        px-6 py-4 flex items-center justify-between 
        sticky top-0 z-30 backdrop-blur-md
      "
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          
          <h1 className="text-xl md:text-2xl font-bold text-text-white">
            Dashboard
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* Country selector */}
        <div className="flex items-center gap-2 px-4 py-2 bg-bg-card rounded-full text-sm border border-accent-orange-900/30">
          <Globe className="w-4 h-4 text-accent-orange-400" />
          <span>INR</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Notification */}
        <button className="relative p-2.5 hover:bg-accent-orange-950/30 rounded-full transition">
          <Bell className="w-5 h-5 text-text-white" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-loss-red rounded-full text-[10px] flex items-center justify-center font-bold">
            2
          </span>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-orange-600 to-accent-orange-800 flex items-center justify-center font-bold text-white shadow-md">
            {name[0]}
          </div>
          <span className="font-medium hidden md:block">{name}</span>
        </div>
      </div>
    </header>
  );
}