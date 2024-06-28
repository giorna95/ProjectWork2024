import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GraficoInEsecuzione = ({ data }) => {
  if (!data || !data.in_esecuzione_FWA || !data.in_esecuzione_Fibra) {
    return <div>Dati non disponibili</div>;
  }

  const chartData = {
    labels: Object.keys(data.in_esecuzione_FWA),
    datasets: [
      {
        label: "In Esecuzione FWA",
        data: Object.values(data.in_esecuzione_FWA),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "In Esecuzione Fibra",
        data: Object.values(data.in_esecuzione_Fibra),
        backgroundColor: "rgba(80, 16, 135, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const styles = {
    chartContainer: {
      position: "relative",
      width: "100%",
      height: "200px",
      margin: "0 auto",
      maxWidth: "600px",
    },
  };

  return (
    <div style={styles.chartContainer}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default GraficoInEsecuzione;
