import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const Index = () => {
    return ( 
        <>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
            <img
                    className="imagen-slide imagen-inicio"
                    src="/images/slider.png"
                    alt="parking"
                />
        </Grid>
        <Grid item xs={12} lg={4}  >
            <Paper style={{ textAlign:'center', marginTop: '30px'}} >
                <div class="titulo">Reserva tu Estacionamiento</div>
                <div class="texto">AEROPUERTO DE MEXICALI, BAJA CALIFORNIA, MÉXICO<br/><br/>
                Haz tu reservación y no te compliques, te ofrecemos un espacio de estacionamiento que puedes reservar por hora, día, semana o el tiempo que necesites. <h2 style={{color:'#f1c40e', fontWeight:'bold'}}>Reserva en 5 minutos!</h2> 
                
                <button class="button-custom"  >Reservar</button>
                </div>
            </Paper>
        </Grid>
       </Grid>
       
       <Grid container spacing={3}>
            <Grid item xs={12} style={{ textAlign:'center', paddingTop: '10px', paddingBottom: '30px'}}>
                    <h3>Elije tu fecha de viaje</h3>
                    <input type="date" name="fechaini" className="input-box" />
                    <input type="date" name="fechafin" className="input-box" />
                    <Link className="input-button" to="/reserva" >Reservar</Link>
            </Grid>
        </Grid>
       <div class="division-area"><div className="bar-titulo">Reserva tu espacio con toda confianza, tu reservación se refleja de inmediato!</div></div>
       <br/><br/><br/>
       <Grid container spacing={2} className="pasos">
        <Grid item lg={4} xs={12} justify="center" >
            <Paper className="paper-pasos">
                <div class="titulo titulo-pasos">1. Elije la Fecha</div>
            <div className="imagen">
            <img
                    style={{width: '40%'}}
                    src="/images/fechas.png"
                    alt="parking"
                />
            </div>
                <div class="texto texto-pasos">Elije la fecha para la que deseas reservar espacio.</div>
            </Paper>
        </Grid>
        <Grid item lg={4} xs={12} justify="center" alignContent="center" >
            <Paper  className="paper-pasos">
                <div class="titulo titulo-pasos">2. Elije tu Espacio</div>
                <div className="imagen"> 
                <img    style={{width: '40%'}}
                        src="/images/estacionamientos.png"
                        alt="parking"
                    />
                </div>
                 <div class="texto texto-pasos">Se mostrarán los espacios disponibles de acuerdo a la fecha elegida, elije uno.</div>
            </Paper>
        </Grid>
        <Grid item lg={4} xs={12} justify="center" >
            <Paper className="paper-pasos">
                <div class="titulo titulo-pasos">3. Haz tu Pago</div>
            <div className="imagen">
            <img
                    style={{width: '40%'}}
                    src="/images/pagos.png"
                    alt="parking"
                />
            </div>
                <div class="texto texto-pasos">Una vez elegido fecha y espacio te mostrará el precio de tu espacio y podrás pagarlo con tarjeta de crédito o débito.</div>
            </Paper>
        </Grid>
        </Grid>
        <div class="division-area">
        <Grid container spacing={2} >
        <Grid item xs={6} justify="center" alignContent="center" >
            <Paper  style={{height:'300px', backgroundColor: '#4d4948'}}>
                <div class="titulo">Reservación por un Día</div>
                 <div class="texto" style={{color:'#ffffff'}}>Haz tu reservación por un día si es que necesitas hacer una visita al Aeropuerto Internacional de Mexicali.</div>
            </Paper>
        </Grid>
        <Grid item xs={6} justify="center" >
            <Paper style={{height:'300px', backgroundColor: '#4d4948'}}>
                <div class="titulo">Reserva por Varios Días</div>
                <div class="texto" style={{color:'#ffffff'}}>Haz tu reservación por uno o más días, si viajas y desear resguardar tu auto esta es la mejor opción para ti.</div>
            </Paper>
        </Grid>
        </Grid>
        </div>
       </>
        );
}
 
export default Index;