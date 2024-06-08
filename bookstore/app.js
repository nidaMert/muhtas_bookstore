const express = require( "express" ),
    app = express(),
    path = require( "path" ),
    PORT = 3000;
const bodyParser = require("body-parser");
const sql = require("msnodesqlv8");

const connectionString = "server=NIDAMERT\\SQLEXPRESS;Database=BOOKSTORE;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

app.use(bodyParser.json());

// register the location of the static assets
app.use( express.static( 'public' ));

app.get( "/", ( req, res ) => {
    // send the HTML file in the API response
    res.sendFile( path.join( __dirname + "/public/pages/index.html" ));
});

app.post( "/pages/login.html", ( req, res ) => {
    console.log(req.body);

    if (req.body.event == "login")
    {
        const query =`SELECT USER_PASSWORD FROM users WHERE USERNAME = '${req.body.username}'`;
        sql.query(connectionString, query, (err, password) => {
            if (err) {
                console.error('Sorgu çalıştırma hatası:', err);
            } else {
                if (password[0].USER_PASSWORD == req.body.password)
                {
                    const response = {
                        status: 'success',
                        message: 'Giriş başarılı',

                    };
                    res.json(response);
                }
            }
        });

    }
    else if (req.body.event == "register")
    {
        const register_queryquery = `INSERT INTO users (USERNAME,USER_MAIL,USER_PASSWORD) VALUES ('${req.body.username}', '${req.body.mail}' , '${req.body.password}')`;
        sql.query(connectionString, register_queryquery, (err, result) => {
            if (err) {
                console.error('Sorgu çalıştırma hatası:', err);
            } else {
                console.log('Kullanıcı başarıyla eklendi:', result);
            }
        });
    }

    res.status(200);
})

// Start the API server!
app.listen( PORT, () => console.log( `👂 API server listening on port ${ PORT }` ) );