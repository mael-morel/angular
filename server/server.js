var express = require('express');
var serveStatic = require('serve-static');
var cors = require('cors');

function server() {

    this.start = function() {
        var app = express();
        app.use(serveStatic('public'));
        app.listen(3000);
    };

    this.startBackend = function() {
        var app = express();
        app.set('json replacer', true);
        app.set('json spaces', 2);
        app.use(cors());

        app.get('/accounts/016787', function(req, res){
            res.json(
                { "type":"ccp",
                  "owner":
                  { "name":"Mael Morel",
                      "civility":"Mr",
                      "email":"mael.morel@zenika.com",
                      "phone":"0667879809"
                  },
                  "comment":"Bla bla"
                });
        });
        app.get('/accounts/576890', function(req, res){
            res.json(
                { "id":"576890",
                    "type":"epargneOrange",
                    "owner":
                    { "name":"Mael Morel",
                        "civility":"Mr",
                        "email":"mael.morel@zenika.com",
                        "phone":"0667879809"
                    },
                    "comment":"Boum boum"
                });
        });
        app.get('/accounts/978988', function(req, res){
            res.json(
                { "id":"978988",
                    "type":"epargneOrange",
                    "owner":
                    { "name":"Mael Morel",
                        "civility":"Mr",
                        "email":"mael.morel@zenika.com",
                        "phone":"0667879809"
                    },
                    "comment":"Bim bim"
                });
        });
        app.get('/accounts/owner/12', function(req, res){
            res.json(
                [{ "id":"016787",
                  "type":"ccp",
                  "owner":
                  { "name":"Mael Morel",
                      "civility":"Mr",
                      "email":"mael.morel@zenika.com",
                      "phone":"0667879809"
                  },
                  "comment":"Bla bla"
                },
                { "id":"576890",
                  "type":"epargneOrange",
                  "owner":
                    { "name":"Mael Morel",
                        "civility":"Mr",
                        "email":"mael.morel@zenika.com",
                        "phone":"0667879809"
                    },
                    "comment":"Boum boum"
                },
                { "id":"978988",
                  "type":"epargneOrange",
                  "owner":
                    { "name":"Mael Morel",
                        "civility":"Mr",
                        "email":"mael.morel@zenika.com",
                        "phone":"0667879809"
                    },
                    "comment":"Bim bim"
                }]
            );
        });
        app.listen(4000);
        console.log('Backend started on localhost:4000')
    };
}

module.exports = {
    server: function() {
        return new server();
    }
};
