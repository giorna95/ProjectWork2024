import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar.js";
import GraficoInProgettazione from "./Component/GraficoInProgettazione.js";
import GraficoTerminati from "./Component/GraficoTerminati.js";
import GraficoInEsecuzione from "./Component/GraficoInEsecuzione.js";
import './App.css';

// Definizione delle opzioni per il menù a cascata delle regioni
const regionOptions = [
	{ value: "", label: "Seleziona una regione" },
	{ value: "Abruzzo", label: "Abruzzo" },
	{ value: "Basilicata", label: "Basilicata" },
	{ value: "Calabria", label: "Calabria" },
	{ value: "Campania", label: "Campania" },
	{ value: "Emilia Romagna", label: "Emilia Romagna" },
	{ value: "Friuli Venezia Giulia", label: "Friuli Venezia Giulia" },
	{ value: "Lazio", label: "Lazio" },
	{ value: "Liguria", label: "Liguria" },
	{ value: "Lombardia", label: "Lombardia" },
	{ value: "Marche", label: "Marche" },
	{ value: "Molise", label: "Molise" },
	{ value: "Piemonte", label: "Piemonte" },
	{ value: "Puglia", label: "Puglia" },
	{ value: "Sardegna", label: "Sardegna" },
	{ value: "Sicilia", label: "Sicilia" },
	{ value: "Toscana", label: "Toscana" },
	{ value: "Trentino Alto Adige", label: "Trentino Alto Adige" },
	{ value: "Umbria", label: "Umbria" },
	{ value: "Valle d'Aosta", label: "Valle d'Aosta" },
	{ value: "Veneto", label: "Veneto" },
  ];

// Componente principale dell'applicazione
const App = () => {
	const [region, setRegion] = useState("");
	const [dataTerminati, setDataTerminati] = useState(null);
	const [dataInProgettazione, setDataInProgettazione] = useState(null);
	const [dataInEsecuzione, setDataInEsecuzione] = useState(null);
	const [regionForSecondChart, setRegionForSecondChart] = useState("");
	const [regionForThirdChart, setRegionForThirdChart] = useState("");

	const handleRegionChange = (e) => {
		setRegion(e.target.value);
	};

	const handleRegionForSecondChartChange = (e) => {
		setRegionForSecondChart(e.target.value);
	};

	const handleRegionForThirdChartChange = (e) => {
		setRegionForThirdChart(e.target.value);
	};

	const fetchDataTerminati = async () => {
		if (region) {
			try {
				const response = await axios.get(
					`http://localhost:5000/dataTerminati/${region}`
				);
				setDataTerminati(response.data);
			} catch (error) {
				console.error("Errore durante il recupero dei dati", error);
			}
		}
	};

	const fetchDataInProgettazione = async () => {
		if (regionForSecondChart) {
			try {
				const response = await axios.get(
					`http://localhost:5000/dataInProgettazione/${regionForSecondChart}`
				);
				setDataInProgettazione(response.data);
			} catch (error) {
				console.error("Errore durante il recupero dei dati", error);
			}
		}
	};

	const fetchDataInEsecuzione = async () => {
		if (regionForThirdChart) {
			try {
				const response = await axios.get(
					`http://localhost:5000/dataInEsecuzione/${regionForThirdChart}`
				);
				setDataInEsecuzione(response.data);
			} catch (error) {
				console.error("Errore durante il recupero dei dati", error);
			}
		}
	};

	return (
		<div className="app-container">
			<Navbar />
			<h1 className="main-title">Monitoraggio Stato Lavori Banda Ultra Larga per l'anno 2022</h1>
			<div className="description">
				<p>
					Il Progetto BUL (Banda Ultra Larga) è un'iniziativa del governo
					italiano volta a sviluppare e migliorare l'infrastruttura di rete a
					banda ultra larga in tutto il paese.
				</p>
				<p>
					L'obiettivo principale è garantire una connettività internet ad alta
					velocità e affidabile, riducendo il divario digitale tra le diverse
					regioni italiane e favorendo la crescita economica e sociale.
				</p>
			</div>
			<h2 className="chart-section-title">Obiettivi principali del Progetto BUL:</h2>
			<ol>
				<li>
					<strong>Connessione ad alta velocità</strong>: Garantire l'accesso a
					internet con velocità di almeno 100 Mbps per la maggior parte della
					popolazione e almeno 30 Mbps per tutti.
				</li>
				<li>
					<strong>Infrastrutture di rete</strong>: Costruire e migliorare le
					infrastrutture di rete, come la fibra ottica, per supportare
					connessioni veloci e affidabili.
				</li>
				<li>
					<strong>Riduzione del digital divide</strong>: Assicurare che le aree
					rurali e periferiche abbiano accesso a connessioni ad alta velocità,
					favorendo così l'inclusione digitale.
				</li>
				<li>
					<strong>Sviluppo economico e sociale</strong>: Stimolare l'economia
					digitale, l'innovazione e la competitività delle imprese italiane,
					oltre a migliorare la qualità della vita dei cittadini grazie a
					servizi digitali avanzati.
				</li>
			</ol>
			<h3 className="chart-section-title">Andamento dell'implementazione del progetto</h3>
			<div className="charts-container">
				<div className="chart-block">
					<select value={region} onChange={handleRegionChange}>
						{regionOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<button onClick={fetchDataTerminati}>
						Visualizza Dati dei lavori Terminati
					</button>
					{dataTerminati && (
						<>
							<h4 className="chart-title">Dati dei Lavori Terminati</h4>
							<GraficoTerminati data={dataTerminati} />
						</>
					)}
				</div>
				<div className="chart-block">
					<select
						value={regionForSecondChart}
						onChange={handleRegionForSecondChartChange}
					>
						{regionOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<button onClick={fetchDataInProgettazione}>
						Visualizza Dati dei lavori in Progettazione
					</button>
					{dataInProgettazione && (
						<>
							<h4 className="chart-title">Dati dei Lavori in Progettazione</h4>
							<GraficoInProgettazione data={dataInProgettazione} />
						</>
					)}
				</div>
				<div className="chart-block">
					<select
						value={regionForThirdChart}
						onChange={handleRegionForThirdChartChange}
					>
						{regionOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<button onClick={fetchDataInEsecuzione}>
						Visualizza Dati dei lavori in Esecuzione
					</button>
					{dataInEsecuzione && (
						<>
							<h4 className="chart-title">Dati dei Lavori in Esecuzione</h4>
							<GraficoInEsecuzione data={dataInEsecuzione} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
