const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;

express.static(root, [options]);

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});