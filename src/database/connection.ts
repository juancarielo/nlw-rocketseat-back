import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

export default connection;

/*
database model example:

points
    image
    name
    email
    whatsapp
    latitude
    longitude
    city
    uf
items
    title
    image
point_items
    point_id
    item_id
*/
