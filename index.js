const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = (process.env.PORT || 4000);

app.get('/', (req,res) => {
	res.json('dook');
})

app.listen(port, () => {
	console.log('App listen to port: ' +port);
})