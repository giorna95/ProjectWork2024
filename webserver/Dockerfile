#immagine di base con Python per Flask
FROM python:3.9-slim

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia i file necessari per il server Flask
COPY webserver.py .
COPY stato_lavori.csv .
COPY italy_geo.csv .

# Installa le dipendenze Python
RUN pip install flask pandas flask-cors gunicorn

# Espone la porta 5000 del container
EXPOSE 5000

# Comando di avvio del server Flask con Gunicorn
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "webserver:app"]
