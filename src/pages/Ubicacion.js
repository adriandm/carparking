import React from 'react';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'


const Ubicacion = () => {
    return ( 
        <>
        <Grid container spacing={3} className="map-style">
        <Grid item lg={4} xs={12} >
        <h2>Ubicación Estacionamiento</h2>
          <p className="texto">
            Carretera Mesa de Andrade Km. 23.5, <br />Col. Mariano Abasolo <br />
            Mexicali, Baja California
          </p>
          <div style={{fontSize: '28px', color:'#dda03f'}}>Frente al Aeropuerto!</div>
        </Grid>
        <Grid item lg={8} xs={12} >
        <h2>Mapa CARPARKING Aeropuerto Mexicali</h2>
        
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.1799008538383!2d-115.24967872934715!3d32.62803233039148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d70bed270282c7%3A0x32e28948e4dfab25!2sCarparking%20Aeropuerto!5e0!3m2!1ses!2smx!4v1600825706260!5m2!1ses!2smx"
                width="90%"
                height="450px"
                id="myId"
                className="map-area"
                display="initial"
                position="relative"/>
        </Grid>
        </Grid>
        </>
     );
}
 
export default Ubicacion;