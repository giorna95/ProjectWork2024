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

// Registrazione dei componenti necessari per il grafico con Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Componente GraficoInEsecuzione che mostra i dati dei lavori in esecuzione
const GraficoInEsecuzione = ({ data }) => {
  // Dati del grafico
  const chartData = {
    labels: Object.keys(data.in_esecuzione_FWA), // Etichette delle province
    datasets: [
      {
        label: "In Esecuzione FWA", // Etichetta per il dataset di FWA in esecuzione
        data: Object.values(data.in_esecuzione_FWA), // Valori del dataset di FWA in esecuzione
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Colore di sfondo per FWA
      },
      {
        label: "In Esecuzione Fibra", // Etichetta per il dataset di Fibra in esecuzione
        data: Object.values(data.in_esecuzione_Fibra), // Valori del dataset di Fibra in esecuzione
        backgroundColor: "rgba(80, 16, 135, 0.6)", // Colore di sfondo per Fibra
      },
    ],
  };

  // Opzioni del grafico
  const options = {
    responsive: true, // Il grafico è responsivo
    maintainAspectRatio: false, // Mantiene il rapporto d'aspetto per la responsività
    scales: {
      x: {
        beginAtZero: true, // Inizia l'asse x da zero
      },
      y: {
        beginAtZero: true, // Inizia l'asse y da zero
      },
    },
    plugins: {
      legend: {
        position: "top", // Posizione della legenda in alto
      },
    },
  };

  // Renderizza il componente del grafico
  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default GraficoInEsecuzione;
