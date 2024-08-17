const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON
app.use(express.json);

let itens = [
    {  nome: 'Item 1', descricao: 'Descrição do Item 1' },
    {  nome: 'Item 2', descricao: 'Descrição do Item 2' },
    {  nome: 'Item 3', descricao: 'Descrição do Item 3' },
];

// para obter todos os itens
app.get('/itens', (req, res) => {
    res.json(itens);
});

// para obter um item específico
app.get('/itens/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = itens.find(i => i.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item não encontrado');
    }
});

// para adicionar um novo item
app.post('/itens', (req, res) => {
    const novoItem = {
        id: itens.length + 1,
        nome: req.body.nome,
        descricao: req.body.descricao,
    };
    itens.push(novoItem);
    res.status(201).json(novoItem);
});

