import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
// server port
const PORT = 3003;

// static file serving
// tells express to use files in "public" directory
app.use(express.static('public'));

// main route ('/')
app.get('/', (req, res) => {
    // sends home.html file to client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-order', (req, res) => {
    const order = {

    }

    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
})

// start server, listen on PORT
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});