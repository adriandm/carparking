import React from 'react';
import Grid from '@material-ui/core/Grid';


const Login = () => {
    
    return ( 
        <>
        <Grid container spacing={3} className="login">
        <Grid item lg={4} xs={2} style={{padding: '4%'}}></Grid>
        <Grid item lg={4} xs={8} style={{padding: '4%'}}>
        <h2>Verificar Reservación</h2>
        <p>Para verificar su reservación introduzca su clave de reservación.</p>
        <form >
            <label className="texto1">Clave de Reservación:</label><br/>
            <input type="text" className="input-box1" style={{textAlign: 'center', textTransform:'uppercase'}}/><br/><br/>
            <input type="submit" value="Buscar Reservación" className="input-button1" />
        </form>
        </Grid>
        
        </Grid>
        </>
     );
}
 
export default Login;