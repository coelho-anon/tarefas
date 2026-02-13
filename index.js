const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let tarefas = [];

app.get('/', (req, res) => {
    res.render('index', { tarefas });
});

app.post('/adicionar', (req, res) => {
    tarefas.push(req.body.tarefa);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Rodando em http://localhost:3000');
});
