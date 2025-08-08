import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  
  const stats = [
    { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up' },
    { label: 'Subscriptions', value: '+2350', change: '+180.1%', trend: 'up' },
    { label: 'Sales', value: '+12,234', change: '+19%', trend: 'up' },
    { label: 'Active Now', value: '+573', change: '+201', trend: 'down' }
  ]

  const recentSales = [
    { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
    { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
    { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
    { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">LoopTrack</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'analytics', label: 'Analytics', icon: '📈' },
              { id: 'reports', label: 'Reports', icon: '📋' },
              { id: 'notifications', label: 'Notifications', icon: '🔔' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* User */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">JD</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, John!</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
              🔍
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg relative">
              🔔
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Recent Sales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
              <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📊</div>
                  <p>Chart placeholder</p>
                  <p className="text-sm">Tailwind is working perfectly!</p>
                </div>
              </div>
            </div>

            {/* Recent Sales */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h2>
              <div className="space-y-4">
                {recentSales.map((sale, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {sale.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{sale.name}</p>
                        <p className="text-xs text-gray-500">{sale.email}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{sale.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View all
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Create Report', desc: 'Generate a new analytics report', icon: '📊' },
                { title: 'Add User', desc: 'Invite a new team member', icon: '👤' },
                { title: 'Export Data', desc: 'Download your data in CSV format', icon: '📥' },
              ].map((action, index) => (
                <button
                  key={index}
                  className="text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <h3 className="font-medium text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-500">{action.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App