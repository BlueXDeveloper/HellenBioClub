const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let carrinho = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/adicionar-ao-carrinho', (req, res) => {
    const produto = req.body.produto;
    carrinho.push(produto);
    res.status(200).json({ mensagem: 'Produto adicionado ao carrinho com sucesso!' });
});

app.get('/ver-carrinho', (req, res) => {
    res.status(200).json({ carrinho });
});

app.get('/finalizar-compra', (req, res) => {
    // Aqui você pode implementar a lógica para enviar uma mensagem no WhatsApp com os produtos selecionados
    const mensagem = `Produtos no carrinho: ${carrinho.join(', ')}`;
    // Exemplo simplificado: exibir a mensagem no console
    console.log(mensagem);
    carrinho = []; // Limpa o carrinho após a compra
    res.status(200).json({ mensagem: 'Compra finalizada com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
