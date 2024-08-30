const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// GET: Mengambil data Pokemon dari PokeAPI
app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: "Pokemon not found" });
    }
});

// POST: Menambahkan Pokemon (dummy implementation)
app.post('/pokemon', (req, res) => {
    const pokemonData = req.body;
    res.status(201).json({ message: "Pokemon inserted", pokemon: pokemonData });
});

// PUT: Memperbarui Pokemon (dummy implementation)
app.put('/pokemon/:name', (req, res) => {
    const { id } = req.params;
    const updateData = req.body; // Mengambil data dari request body
  
    console.log('PUT request received for Pokémon ID: ${id}');
    console.log('Data to update:', updateData);
  
    res.json({ 
      message: 'Simulated PUT request for Pokémon ID: ${id}', 
      data: updateData
    });
  });

// PATCH: Memperbarui sebagian dari Pokemon (dummy implementation)
app.patch('/pokemon/:name', (req, res) => {
    res.json({ message: "This is a PATCH operation" });
});

// DELETE: Menghapus Pokemon (dummy implementation)
app.delete('/pokemon/:name', (req, res) => {
    res.json({ message: "This is a DELETE operation" });
});

// HEAD: Mendapatkan metadata Pokemon (dummy implementation)
app.head('/pokemon/:name', (req, res) => {
    res.sendStatus(200);
});

// OPTIONS: Mendapatkan opsi yang tersedia untuk resource (dummy implementation)
app.options('/pokemon/:name', (req, res) => {
    res.json({ message: "This is an OPTIONS operation" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
