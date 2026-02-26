import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

const PORT = 3006;
const orders = [];

// main route ('/')
app.get('/', (req, res) => {
    // sends home.html file to client
    res.render('home');
});

app.post('/submit-order', (req, res) => {
    const order = {
        name: req.body.name,
        email: req.body.email,
        flavor: req.body.flavor,
        method: req.body.method,
        toppings: req.body.toppings,
        comments: req.body.comments
    }

    let user = {
        name: order.name,
        email: order.email,
        flavor: order.flavor,
        method: order.method,
        toppings: order.toppings,
        comments: order.comments
    }

    orders.push(order);

    res.render('confirm', { user });
});

app.get('/admin', (req, res) => {
    res.render('admin', { orders });
});

// start server, listen on PORT
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

});

