export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome Back</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stats cards will go here */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
           <h3 className="text-gray-500">Total Projects</h3>
           <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  )
}
