const express = require( "express" ),
    app = express(),
    path = require( "path" ),
    PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// register the location of the static assets
app.use( express.static( 'public' ));

app.get( "/", ( req, res ) => {
    // send the HTML file in the API response
    res.sendFile( path.join( __dirname + "/public/pages/index.html" ));
});

app.post( "/pages/login.html", ( req, res ) => {
    console.log(req.body);
    res.status(200);
})

// Start the API server!
app.listen( PORT, () => console.log( `👂 API server listening on port ${ PORT }` ) );