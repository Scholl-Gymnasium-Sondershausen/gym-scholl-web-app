import express from 'express'
import path from "path";

const app = express();
app.use( "/static-files", express.static( path.join( __dirname + '../../../build' ) ) );
app.get( '/', ( req, res ) => {
  res.sendFile( path.join( __dirname + '../../../build/index.html' ) );
} );

app.get( '/*', ( req, res ) => {
  res.sendFile( path.join( __dirname + '../../../build/index.html' ) );
} );


const port = process.env.PORT || 1337;
app.listen( port );
