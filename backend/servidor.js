const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Servidor en funcionament al port ${PORT}`);
});

const cpus = [
    { id: 1, nom: "Intel i5-12400F", preu: 180, puntuacio: 85 },
    { id: 2, nom: "AMD Ryzen 5 5600X", preu: 200, puntuacio: 90 },
    { id: 3, nom: "Intel i3-12100", preu: 120, puntuacio: 70 },
    { id: 4, nom: "AMD Ryzen 7 5800X", preu: 320, puntuacio: 95 },
];

app.get('/cpus', (req, res) => {
    const pressupost = parseFloat(req.query.pressupost);

    if (!pressupost) {
        return res.status(400).send({ error: "Has de proporcionar un pressupost vàlid." });
    }

    const cpusFiltrades = cpus.filter(cpu => cpu.preu <= pressupost)
        .sort((a, b) => b.puntuacio - a.puntuacio);

    res.json(cpusFiltrades[0] || { missatge: "No hi ha CPUs disponibles per aquest pressupost." });
});
