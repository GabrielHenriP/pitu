import app from './app';

import database from './database';

database.sync(/*{force: true}*/);

app.listen(3000, () => {
    console.log('server running at 3000');
});
