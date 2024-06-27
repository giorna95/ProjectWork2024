import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar.js";
import GraficoInProgettazione from "./Component/GraficoInProgettazione.js";
import GraficoTerminati from "./Component/GraficoTerminati.js";
import GraficoInEsecuzione from "./Component/GraficoInEsecuzione.js";

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
	// Stati per gestire la selezione delle regioni e i dati per i grafici
	const [region, setRegion] = useState("");
	const [dataTerminati, setDataTerminati] = useState(null);
	const [dataInProgettazione, setDataInProgettazione] = useState(null);
	const [dataInEsecuzione, setDataInEsecuzione] = useState(null);
	const [regionForSecondChart, setRegionForSecondChart] = useState("");
	const [regionForThirdChart, setRegionForThirdChart] = useState("");

	// Gestisce il cambiamento della regione selezionata per il primo grafico
	const handleRegionChange = (e) => {
		setRegion(e.target.value);
	};

	// Gestisce il cambiamento della regione selezionata per il secondo grafico
	const handleRegionForSecondChartChange = (e) => {
		setRegionForSecondChart(e.target.value);
	};

	// Gestisce il cambiamento della regione selezionata per il terzo grafico
	const handleRegionForThirdChartChange = (e) => {
		setRegionForThirdChart(e.target.value);
	};

	// Funzione per recuperare i dati dei lavori terminati dalla API
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

	// Funzione per recuperare i dati dei lavori in progettazione dalla API
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

	// Funzione per recuperare i dati dei lavori in esecuzione dalla API
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

	// Renderizza l'interfaccia dell'applicazione
	return (
		<div>
			<Navbar />
			<h1>Monitoraggio Stato Lavori Banda Ultra Larga per l'anno 2022</h1>
			<div>
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
			<h2>Obiettivi principali del Progetto BUL:</h2>
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
			<h3>Andamento dell'implementazione del progetto</h3>
			{/* Sezione per il primo grafico */}
			<div>
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
			</div>
			{dataTerminati && <GraficoTerminati data={dataTerminati} />}
			{/* Sezione per il secondo grafico */}
			<div>
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
			</div>
			{dataInProgettazione && (
				<GraficoInProgettazione data={dataInProgettazione} />
			)}
			{/* Sezione per il terzo grafico */}
			<div>
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
			</div>
			{dataInEsecuzione && <GraficoInEsecuzione data={dataInEsecuzione} />}
		</div>
	);
};

export default App;
