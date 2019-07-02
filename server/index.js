const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
//const mysql = require('mysql');
//const client = require('node-rest-client');

var request = require("request");


// var con = mysql.createConnection({
//   host: process.argv.slice(2)[0],
//   user: process.argv.slice(3)[0],
//   password: process.argv.slice(4)[0],
//   database: process.argv.slice(5)[0]
// });

//console.log(process.argv);

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
const backend = {
    url:process.argv.slice(3)[0]
}

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '../public')
            }
        }
    }
});

server.connection({ port: process.argv.slice(2)[0] });

server.register(Inert, () => {});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});

require('./app/routes')(server,request,backend);