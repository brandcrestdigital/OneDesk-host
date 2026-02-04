// src/pages/Dashboard.jsx
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, Send } from 'lucide-react';

const chartData = [
  { date: "19/09", value: 1500000 },
  { date: "", value: 2500000 },
  { date: "", value: 3500000 },
  { date: "", value: 2800000 },
  { date: "", value: 4500000 },
  { date: "", value: 5500000 },
  { date: "Now", value: 6500000 },
];

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8">
      {/* Greeting + Quick Transfer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold">
            Good morning, Admin 👋
          </h2>
          <p className="text-text-muted mt-1">Welcome back</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-5 py-2.5 bg-gray-800/60 rounded-full text-sm flex items-center gap-2">
            <span>Dec 31 - Jan 13, 2026</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button className="px-7 py-3 bg-gradient-to-r from-accent-orange-500 to-accent-orange-600 hover:from-accent-orange-600 rounded-xl font-medium shadow-lg flex items-center gap-2 text-white">
            <Send className="w-4 h-4" />
            Quick Transfer
          </button>
        </div>
      </div>

      {/* Grid with cards, transactions, chart, investments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Transactions + Chart */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Transactions */}
            <div className="bg-bg-card rounded-2xl p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-semibold">Transactions</h3>
                <button className="text-accent-orange-400 text-sm">Show more</button>
              </div>
              <div className="space-y-4 text-sm">
                {[
                  { from: "Pierre DC", amount: -102400, type: "Bank transfer" },
                  { from: "Alessandro VN", amount: 95400, type: "Bank transfer" },
                  { from: "Alex VVW", amount: -202400, type: "Bank transfer" },
                  { from: "Tiago DMF", amount: -92800, type: "Bank transfer" },
                  { from: "Sofia VL", amount: 102400, type: "Bank transfer" },
                ].map((t, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${t.amount > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {t.amount > 0 ? '↑' : '↓'}
                      </div>
                      <div>
                        <p>From {t.from}</p>
                        <p className="text-text-muted text-xs">{t.type}</p>
                      </div>
                    </div>
                    <p className={t.amount > 0 ? "text-gain-green" : "text-loss-red"}>
                      {t.amount > 0 ? '+' : ''}{Math.abs(t.amount).toLocaleString('en-IN')} ₹
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-bg-card rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Your Statistics</h3>
                <select className="bg-gray-800 text-sm px-3 py-1.5 rounded-lg">
                  <option>This week</option>
                </select>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9ca3af" />
                    <YAxis 
                      stroke="#9ca3af"
                      tickFormatter={(value) => `₹${value.toLocaleString('en-IN')}`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                      formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Balance']}
                    />
                    <Area type="monotone" dataKey="value" stroke="#f97316" fill="url(#orangeGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Right column – Smart Invest + Fast Transfer */}
        <div className="space-y-6">
          <div className="bg-bg-card rounded-2xl p-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-semibold">Smart Invest</h3>
              <button className="text-accent-orange-400 text-sm">Show more</button>
            </div>
            <div className="flex gap-2 mb-5">
              <button className="px-5 py-2 bg-accent-orange-600 rounded-lg text-sm">Popular</button>
              <button className="px-5 py-2 text-sm text-gray-400 hover:bg-gray-800 rounded-lg">Tech</button>
              <button className="px-5 py-2 text-sm text-gray-400 hover:bg-gray-800 rounded-lg">Social Media</button>
            </div>
            <div className="space-y-4">
              {[
                { name: "TechFlow Inc", ticker: "TFLO", gain: 102400, today: 11633 },
                { name: "DataVerse Corp", ticker: "DVCR", gain: 49500, today: 22892 },
                { name: "CloudNine Systems", ticker: "CNIN", gain: 202535, today: 56112 },
                { name: "FinSight Labs", ticker: "FSLB", gain: 21045, today: 34210 },
              ].map((inv, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-t border-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-xs font-bold">
                      {inv.ticker.slice(0,2)}
                    </div>
                    <div>
                      <p className="font-medium">{inv.name}</p>
                      <p className="text-xs text-text-muted">{inv.ticker}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gain-green">+{inv.gain.toLocaleString('en-IN')} ₹</p>
                    <p className="text-xs text-gain-green">+₹{inv.today.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Transfer - placeholder (you can expand later) */}
          <div className="bg-bg-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-5">Quick Transfer</h3>
            <p className="text-secondary-text">Coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
}