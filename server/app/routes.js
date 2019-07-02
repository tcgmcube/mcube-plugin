module.exports = function (server, request, backend) {

    var options = { 
                method: 'POST',
                url: backend.url+'/executeSQL',
                headers: 
                    {   
                        'cache-control': 'no-cache',
                        'content-type': 'application/json' 
                    },
                body: { query: '', type: 'GET' },
                json: true 
                };


    server.route({
        path: '/api/getUsers',
        method: 'GET',
        handler: function (req, reply) {

            // dbCon.connect(function(err) {
            //     if (err) throw err;
                // dbCon.query("SELECT * FROM users", function (err, result, fields) {
                //   if (err) throw err;
                //   reply(result);
                // });
                console.log(options);

                options.body.query = 'SELECT * FROM `users`';    
                options.body.type = 'GET';     
               
                request(options, function (error, response, body) {
                if (error) throw new Error(error);
               
                console.log(body);
                reply(body);
               });
            //   });
          
          
    
        }
      });

      server.route({
        path: '/api/addUser',
        method: 'POST',
        handler: function (req, reply) {
            console.log(req);
            var user = req.payload.data;
            
            options.body.query = "INSERT INTO `users` (firstName,lastName,email) VALUES ('"+user.firstName+"', '"+user.lastName+"','"+user.email+"')";
            options.body.type = 'INSERT';
            // dbCon.query(sql, function (err, result) {
            //     if (err) throw err;
            //     console.log("1 record inserted");
            //     reply(req.payload);
            // });

            console.log(options);

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
               
                //console.log(body);
                reply(body);
               });

            // dbCon.connect(function(err) {
            //     if (err) throw err;
                // dbCon.query("SELECT * FROM users", function (err, result, fields) {
                //   if (err) throw err;
                //   reply(result);
                // });
            //   });
          
          
    
        }
      });



      
};