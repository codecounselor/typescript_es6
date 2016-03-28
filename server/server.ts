/// <reference path="../typings/tsd.d.ts" />

import * as express from 'express';

const app = express();

app.get('/', (req, resp) => resp.send('Hello Java(Script) Enthusiasts'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})