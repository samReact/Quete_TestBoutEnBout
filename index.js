const app = require('./app');
require('./setupDatabase');

const port = process.env.PORT || 3001;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
