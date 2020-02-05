import express from 'express'
import path from "path";
import TimetableService from './TimetableService'
const app = express();
app.use( "/static-files", express.static( path.join( __dirname + '../../../build' ) ) );
app.use( "/assets", express.static( path.join( __dirname + '../../../build/assets' ) ) );
app.use( "/static", express.static( path.join( __dirname + '../../../build/static' ) ) );
app.use( "/timetable-service", TimetableService )
app.get( '/', ( req, res ) => {
  res.sendFile( path.join( __dirname + '../../../build/index.html' ) );
} );

app.get( '/*', ( req, res ) => {
  res.sendFile( path.join( __dirname + '../../../build/index.html' ) );
} );

app.get( '/assets/*', ( req, res ) => {
  res.sendFile( path.join( __dirname + '../../../build/index.html' ) );
} );

const port = process.env.PORT || 4000;
app.listen( port );
