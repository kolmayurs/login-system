const express = require('express');
const cors = require('cors');

const app = express();

/*app.use(cors());*/

const port = (process.env.PORT || 4000);

const whitelist = ['http://localhost:4000', 'https://login-sys.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', cors(corsOptions), (req,res) => {
	res.json('dook');
})

app.listen(port, () => {
	console.log('App listen to port: ' +port);
})