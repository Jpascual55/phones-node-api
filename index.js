const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const phones = [{
        id: 1,
        name: 'iPhone X',
        brand: 'Apple',
        color: 'White',
        price: 1250,
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201710/23/00194611000301____1__640x640.jpg'
    },
    {
        id: 2,
        name: 'Galaxy s7',
        brand: 'Samsung',
        color: 'Pink Gold',
        price: 944,
        img: 'https://www.csmobilespro.com/5256-thickbox_default/samsung-galaxy-s7-g930f-pink-gold-32gb-libre.jpg'
    }
];

app.get('/api/phones', (req, res) => {
    res.send(phones);
});


const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));