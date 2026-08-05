import React, { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('job-orders')

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold text-sky-600 mb-4">ZOEHL ARTS</h1>
      <div className="flex gap-2 mb-6">
        <button onClick={() => setTab('job-orders')} className="px-4 py-2 bg-slate-800 text-white rounded">Job Orders</button>
        <button onClick={() => setTab('expenses')} className="px-4 py-2 bg-slate-800 text-white rounded">Expenses</button>
        <button onClick={() => setTab('payroll')} className="px-4 py-2 bg-slate-800 text-white rounded">Payroll</button>
      </div>
      <div className="p-4 border rounded bg-slate-50">
        <h2 className="text-xl font-semibold capitalize">{tab} Section</h2>
        <p className="text-slate-600 mt-2">Zoehl Arts Printing Management System</p>
      </div>
    </div>
  )
}

