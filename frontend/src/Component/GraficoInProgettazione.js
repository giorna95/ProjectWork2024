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

// Componente GraficoInProgettazione che mostra i dati dei lavori in progettazione
const GraficoInProgettazione = ({ data }) => {
  // Dati del grafico
  const chartData = {
    labels: Object.keys(data.in_progettazione_FWA), // Etichette delle province
    datasets: [
      {
        label: "In Progettazione FWA", // Etichetta per il dataset di FWA in progettazione
        data: Object.values(data.in_progettazione_FWA), // Valori del dataset di FWA in progettazione
        backgroundColor: "rgba(255, 159, 64, 0.6)", // Colore di sfondo per FWA
      },
      {
        label: "In Progettazione Fibra", // Etichetta per il dataset di Fibra in progettazione
        data: Object.values(data.in_progettazione_Fibra), // Valori del dataset di Fibra in progettazione
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Colore di sfondo per Fibra
      },
    ],
  };

  // Opzioni del grafico
  const options = {
    indexAxis: 'y', // Imposta l'asse delle categorie (asse x) come asse y per il grafico orizzontale
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

export default GraficoInProgettazione;
