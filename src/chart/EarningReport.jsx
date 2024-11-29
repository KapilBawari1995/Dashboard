import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const EarningReport = ({ earningsData }) => {
    const data = {
    labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    datasets: [
      {
        label: 'Earnings',
        data: earningsData.length ? earningsData.slice(0, 7) : [0, 0, 0, 0, 0, 0, 0], 
        backgroundColor: [
          '#E0E0FF', 
          '#E0E0FF',
          '#E0E0FF', 
          '#E0E0FF', 
          '#7B61FF', 
          '#E0E0FF', 
          '#E0E0FF', 
        ],
        borderRadius: 5, 
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Earning Report', 
        color: '#4A4A4A', 
        font: {
          size: 16,
          weight: 'bold',
        },
        align: 'start', 
      },
      subtitle: {
        display: true,
        text: 'Weekly Bitcoin Price Overview',
        color: '#8D8D8D',
        font: {
          size: 12,
        },
        align: 'start',
        padding: {
          bottom: 10,
        },
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#E0E0E0',
        },
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`, 
        },
      },
    },
  };

  return (
    <div className="earning-report">
      <Bar data={data} options={options} />
    </div>
  );
};

export default EarningReport;
