import React, { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState('job-orders')

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 text-white p-4">
        <h1 className="text-xl font-bold tracking-wider mb-6 text-sky-400">
          ZOEHL ARTS
        </h1>
        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('job-orders')}
            className={`p-3 rounded text-left font-medium transition ${activeTab === 'job-orders' ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            📋 Job Orders
          </button>
          <button 
            onClick={() => setActiveTab('expenses')}
            className={`p-3 rounded text-left font-medium transition ${activeTab === 'expenses' ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            💸 Expenses
          </button>
          <button 
            onClick={() => setActiveTab('payroll')}
            className={`p-3 rounded text-left font-medium transition ${activeTab === 'payroll' ? 'bg-sky-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            👥 Payroll
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-slate-50">
        <header className="mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-slate-800 capitalize">
            {activeTab.replace('-', ' ')} Management
          </h2>
          <p className="text-sm text-slate-500">Zoehl Arts Printing Services System</p>
        </header>

        <main className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          {activeTab === 'job-orders' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Active Job Orders</h3>
              <p className="text-slate-600">Dito lalabas ang talaan ng mga printing job orders at status nito.</p>
            </div>
          )}
          {activeTab === 'expenses' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Expenses Tracking</h3>
              <p className="text-slate-600">Dito mai-re-record ang mga gastusin sa mga gamit at supplies.</p>
            </div>
          )}
          {activeTab === 'payroll' && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Payroll & Attendance</h3>
              <p className="text-slate-600">Dito ikakalkula ang sahod at record ng mga tauhan.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
