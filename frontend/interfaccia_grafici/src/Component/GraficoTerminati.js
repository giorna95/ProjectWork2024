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
		labels: Object.keys(data.terminati_FWA), // Etichette dal dato terminati_FWA
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
	};

	// Renderizza il componente del grafico
	return (
		<div style={{ position: "relative", width: "100%", height: "200px" }}>
			<Bar data={chartData} options={options} />
		</div>
	);
};

export default GraficoTerminati;
