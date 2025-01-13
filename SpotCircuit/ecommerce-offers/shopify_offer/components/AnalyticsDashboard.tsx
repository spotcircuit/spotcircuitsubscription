import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AnalyticsDashboard = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  const organicTrafficData = {
    labels: months,
    datasets: [
      {
        label: 'Organic Traffic',
        data: [1000, 2500, 3800, 5200, 7500, 10000],
        fill: true,
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const conversionData = {
    labels: months,
    datasets: [
      {
        label: 'Conversion Rate',
        data: [1.2, 1.8, 2.3, 2.8, 3.2, 3.8],
        fill: true,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  const metrics = [
    { label: 'Total Traffic', value: '10,000+', change: '+235%', color: 'green' },
    { label: 'Conversion Rate', value: '3.8%', change: '+158%', color: 'blue' },
    { label: 'Revenue Growth', value: '$125K', change: '+312%', color: 'purple' },
  ];

  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-white">Performance Dashboard</h3>
        <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-medium">
          Live Data
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-gray-800 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className={`text-${metric.color}-500 text-sm flex items-center`}>
                {metric.change} ↑
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-white mb-4">Organic Traffic Growth</h4>
          <div className="h-64">
            <Line data={organicTrafficData} options={options} />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-white mb-4">Conversion Rate Trend</h4>
          <div className="h-64">
            <Line data={conversionData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
