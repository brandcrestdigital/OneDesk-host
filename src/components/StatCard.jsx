
function StatCard({ title, value, change, positive }) {
  return (
    <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition hover:scale-[1.02]">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-xl ${
          positive
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        ●
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className={`text-sm ${positive ? "text-green-600" : "text-red-600"}`}>
          {change}
        </p>
      </div>
    </div>
  );
}

export default StatCard;

