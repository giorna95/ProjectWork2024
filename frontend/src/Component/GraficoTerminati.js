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

// Componente GraficoTerminati che mostra i dati dei lavori terminati
const GraficoTerminati = ({ data }) => {
  // Dati del grafico
  const chartData = {
    labels: Object.keys(data.terminati_FWA), // Etichette delle province
    datasets: [
      {
        label: "Terminati FWA", // Etichetta per il dataset di FWA terminati
        data: Object.values(data.terminati_FWA), // Valori del dataset di FWA terminati
        backgroundColor: "rgba(175, 12, 12, 0.6)", // Colore di sfondo per FWA
      },
      {
        label: "Terminati Fibra", // Etichetta per il dataset di Fibra terminati
        data: Object.values(data.terminati_Fibra), // Valori del dataset di Fibra terminati
        backgroundColor: "rgba(100, 132, 205, 0.6)", // Colore di sfondo per Fibra
      },
    ],
  };

  // Opzioni del grafico
  const options = {
    maintainAspectRatio: false, // Mantiene il rapporto d'aspetto per la responsività
    responsive: true, // Il grafico è responsivo
    indexAxis: "y", // Imposta l'asse delle categorie (asse x) come asse y per il grafico orizzontale
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

export default GraficoTerminati;
