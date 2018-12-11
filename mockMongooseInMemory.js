/* eslint-disable no-param-reassign, no-console */

const mongoose = require('mongoose');
const MongodbMemoryServer = require('mongodb-memory-server').default;

mongoose.Promise = Promise;

jest.setTimeout(60000);

const originalConnect = mongoose.connect;
mongoose.connect = async () => {
  const mongoServer = new MongodbMemoryServer();

  const mongoUri = await mongoServer.getConnectionString(true);

  originalConnect.bind(mongoose)(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  mongoose.connection.on('error', e => {
    if (e.message.code === 'ETIMEDOUT') {
      console.error(e);
    } else {
      throw e;
    }
  });

  mongoose.connection.once('open', () => {
    // console.log(`MongoDB successfully connected to ${mongoUri}`);
  });

  mongoose.connection.once('disconnected', () => {
    // console.log('MongoDB disconnected!');
    mongoServer.stop();
  });
};

module.exports = mongoose;
