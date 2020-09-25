import React from 'react';
import Grid from '@material-ui/core/Grid';


const Contacto = () => {
    
    return ( 
        <>
        <Grid container spacing={1}>
        <Grid item lg={5} xs={12} style={{padding: '4%'}}>
        <h2>Comuníquese con Nosotros</h2>
        <p>Responderemos todas sus dudas lo antes posible.</p>
        <form >
            <label className="texto1">Nombre:</label><br/>
            <input type="text" className="input-box1" /><br/><br/>
            <label className="texto1">Correo:</label><br/>
            <input type="text" className="input-box1" /><br/><br/>
            <label className="texto1">Telefono:</label><br/>
            <input type="text" className="input-box1" /><br/><br/>
            <label className="texto1">Mensaje:</label><br/>
            <textarea type="text" className="input-box1" rows="5" ></textarea><br/><br/>
            <input type="submit" value="Enviar Mensaje" className="input-button1" />
        </form>
        </Grid>
        <Grid item lg={6} xs={12} style={{padding: '4%'}}>
        <h2>Contacto</h2>
          <p className="texto">
            Carretera Mesa de Andrade Km. 23.5, <br />Col. Mariano Abasolo <br />
            Mexicali, Baja California
          </p>
          <p className="texto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </Grid>
        </Grid>
        </>
     );
}
 
export default Contacto;