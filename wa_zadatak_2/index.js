const express = require('express');
const app = express();
app.listen(PORT)

const PORT = 3000;

const pizze = [
    { id: 1, naziv: 'Margherita', cijena: 6.5},
    { id: 2, naziv: 'Capricciosa', cijena: 8.0 },
    { id: 3, naziv: 'Quattro formaggi', cijena: 10.0 },
    { id: 4, naziv: 'Šunka sir', cijena: 7.0 },
    { id: 5, naziv: 'Vegetariana', cijena: 9.0 }
]

app.get('/pizze/:id', (req, res) => {
const id_pizza = req.params.id; // dohvaćamo id parametar iz URL-a
for (pizza of pizze) {
if (pizza.id == id_pizza) {
// ako smo pronašli podudaranje u id-u
res.json(pizza); // vrati objekt pizze kao rezultat
}
}
});