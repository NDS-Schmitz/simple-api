//requirements
const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

const myCars = {
	ram: {
		Year: 2019,
		Make: 'Ram',
		Model: 1500,
		Trim: 'Big Horn',
	},
	mustang: {
		Year: 1966,
		Make: 'Ford',
		Model: 'Mustang',
		Trim: 'Convertiable',
	},
	silverado: {
		Year: 2012,
		Make: 'Chevy',
		Model: 'Silverado',
		Trim: 'XL',
	},
	unknown: {
		Year: 'N/A',
		Make: 'N/A',
		Model: 'N/A',
		Trim: 'N/A',
	},
};
//routers

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.get('/api/:name', (req, res) => {
	const myVehicles = req.params.name.toLowerCase();
	if (myCars[myVehicles]) {
		res.json(myCars[myVehicles]);
	} else {
		res.json(myCars['unknown']);
	}
});

//servers

app.listen(PORT, () => {
	console.log(`Server is now running on port ${PORT}`);
});
