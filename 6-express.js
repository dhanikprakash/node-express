const express = require('express');
const { rest } = require('lodash');
const app = express();
const morgan = require('morgan');



app.use([morgan('tiny')]);
app.use( express.static('./content'));



app.listen(5000, () => {
  console.log('server is listening on 5000...');
});