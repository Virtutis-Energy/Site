'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface InvestChartProps {
  data: number[]
  monthLabel: (month: number) => string
  datasetLabel: string
  yAxisLabel: string
  xAxisLabel: string
}

export function InvestChart({
  data,
  monthLabel,
  datasetLabel,
  yAxisLabel,
  xAxisLabel,
}: InvestChartProps) {
  const labels = data.map((_, i) => monthLabel(i + 1))

  const chartData = {
    labels,
    datasets: [
      {
        label: datasetLabel,
        data,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#007bff',
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: yAxisLabel,
        },
      },
      x: {
        title: {
          display: true,
          text: xAxisLabel,
        },
      },
    },
  }

  return <Line data={chartData} options={options} />
}
