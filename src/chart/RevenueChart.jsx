import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RevenueChart = ({ chartData, totalRevenue }) => {
  const [error, setError] = useState(null);


  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  
  const filteredData = chartData.datasets.map(dataset => ({
    ...dataset,
    data: dataset.data.slice(0, 7) 
  }));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          boxWidth: 10,
          padding: 10,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        borderColor: '#ccc',
        borderWidth: 1,
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.dataset.label || '';
            const value = tooltipItem.raw;
            return `${label}: $${(value / 1000000).toFixed(1)}M`;
          }
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount ($)',
        },
        ticks: {
          callback: function (value) {
            return `$${(value / 1000000).toFixed(1)}M`;
          }
        }
      }
    }
  };

  return (
    <div>
      {error ? (
        <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
      ) : (
        <div>
          <h4 style={{ margin: 0, textAlign: 'center' }}>
            Total Revenue: ${totalRevenue.toFixed(2)}
          </h4>
          <Line data={{ labels: monthLabels, datasets: filteredData }} options={options} />
        </div>
      )}
    </div>
  );
};

export default RevenueChart;
