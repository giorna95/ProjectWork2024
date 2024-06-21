// src/App.js

import React, { useState } from 'react';
import ChartComponent from './ChartComponent';
import ChartComponentInProgettazione from './ChartComponentInProgettazione';
import ChartComponentInEsecuzione from './ChartComponentInEsecuzione';
import axios from 'axios';
import Navbar from './Component/Navbar.js'

// Definisci le opzioni delle regioni una sola volta
const regionOptions = [
  { value: '', label: 'Seleziona una regione' },
  { value: 'Abruzzo', label: 'Abruzzo' },
  { value: 'Basilicata', label: 'Basilicata' },
  { value: 'Calabria', label: 'Calabria' },
  { value: 'Campania', label: 'Campania' },
  { value: 'Emilia Romagna', label: 'Emilia Romagna' },
  { value: 'Friuli Venezia Giulia', label: 'Friuli Venezia Giulia' },
  { value: 'Lazio', label: 'Lazio' },
  { value: 'Liguria', label: 'Liguria' },
  { value: 'Lombardia', label: 'Lombardia' },
  { value: 'Marche', label: 'Marche' },
  { value: 'Molise', label: 'Molise' },
  { value: 'Piemonte', label: 'Piemonte' },
  { value: 'Puglia', label: 'Puglia' },
  { value: 'Sardegna', label: 'Sardegna' },
  { value: 'Sicilia', label: 'Sicilia' },
  { value: 'Toscana', label: 'Toscana' },
  { value: 'Trentino Alto Adige', label: 'Trentino Alto Adige' },
  { value: 'Umbria', label: 'Umbria' },
  { value: "Valle d'Aosta", label: "Valle d'Aosta" },
  { value: 'Veneto', label: 'Veneto' },
];

const App = () => {
  const [region, setRegion] = useState('');
  const [dataTerminati, setDataTerminati] = useState(null);
  const [dataInProgettazione, setDataInProgettazione] = useState(null);
  const [dataInEsecuzione, setDataInEsecuzione] = useState(null);
  const [regionForSecondChart, setRegionForSecondChart] = useState('');
  const [regionForThirdChart, setRegionForThirdChart] = useState('');

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
        const response = await axios.get(`http://localhost:5000/dataTerminati/${region}`);
        setDataTerminati(response.data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati', error);
      }
    }
  };

  const fetchDataInProgettazione = async () => {
    if (regionForSecondChart) {
      try {
        const response = await axios.get(`http://localhost:5000/dataInProgettazione/${regionForSecondChart}`);
        setDataInProgettazione(response.data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati', error);
      }
    }
  };

  const fetchDataInEsecuzione = async () => {
    if (regionForThirdChart) {
      try {
        const response = await axios.get(`http://localhost:5000/dataInEsecuzione/${regionForThirdChart}`);
        setDataInEsecuzione(response.data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati', error);
      }
    }
  };

  return (
    <div>
      <Navbar /> {/* Aggiungi la barra di navigazione */}
      <h1>Stato Lavori</h1>

      {/* Sezione per il primo grafico */}
      <div>
        <select value={region} onChange={handleRegionChange}>
          {regionOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button onClick={fetchDataTerminati}>Visualizza Dati dei lavori Terminati</button>
      </div>
      {dataTerminati && <ChartComponent data={dataTerminati} />}
      
      {/* Sezione per il secondo grafico */}
      <div>
        <select value={regionForSecondChart} onChange={handleRegionForSecondChartChange}>
          {regionOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button onClick={fetchDataInProgettazione}>Visualizza Dati dei lavori in Progettazione</button>
      </div>
      {dataInProgettazione && <ChartComponentInProgettazione data={dataInProgettazione} />}
      
      {/* Sezione per il terzo grafico */}
      <div>
        <select value={regionForThirdChart} onChange={handleRegionForThirdChartChange}>
          {regionOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button onClick={fetchDataInEsecuzione}>Visualizza Dati dei lavori in Esecuzione</button>
      </div>
      {dataInEsecuzione && <ChartComponentInEsecuzione data={dataInEsecuzione} />}
    </div>
  );
};

export default App;
