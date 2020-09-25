import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#fff',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 280,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #fafafa',
    },
  }))(Tooltip);

const SomeOtherComponent = () => (
    <svg viewBox="0 0 100 70">
        
        <rect x="0" y="0" width="100" height="80" fill="gray" stroke-width="5"/>
        <text x="2" y="5" className="svg-texto">Entrada</text>
        
        <Tooltip title="Rojo" arrow><rect x="0" y="10" width="20" height="10" fill="red" stroke="black" stroke-width=".1"/></Tooltip>
        <Tooltip title="Azul" arrow><rect x="0" y="20" width="20" height="10" fill="blue" stroke="black" stroke-width=".1"/></Tooltip>
        <Tooltip title="Amarillo" arrow><rect x="0" y="30" width="20" height="10" fill="yellow" stroke="black" stroke-width=".1"/></Tooltip>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <rect x="0" y="40" width="20" height="10" fill="green" stroke="black" stroke-width=".1"/>
      </HtmlTooltip>
      <Tooltip title="Rojo" arrow><rect x="40" y="10" width="20" height="10" fill="red" stroke="black" stroke-width=".1"/></Tooltip>
        <Tooltip title="Azul" arrow><rect x="40" y="20" width="20" height="10" fill="blue" stroke="black" stroke-width=".1"/></Tooltip>
        <Tooltip title="Amarillo" arrow><rect x="40" y="30" width="20" height="10" fill="yellow" stroke="black" stroke-width=".1"/></Tooltip>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Texto Adicional A Desplegar</Typography>
            <em>{"Contenido "}</em> <b>{'Click'}</b> <u>{'contenido'}</u>.{' '}
            {"Texto Texto Texto?"}
          </React.Fragment>
        }
      >
        <rect x="40" y="40" width="20" height="10" fill="mediumseagreen" stroke="black" stroke-width=".1" onClick={()=>{ alert('Espacio Elegido'); }} />
      </HtmlTooltip>
      <Tooltip title="Rojo" arrow><rect x="80" y="10" width="20" height="10" fill="red" stroke="black" stroke-width=".1"/></Tooltip>
        <Tooltip title="Azul" arrow><rect x="80" y="20" width="20" height="10" fill="blue" stroke="black" stroke-width=".1"/></Tooltip>
        <Tooltip title="Amarillo" arrow><rect x="80" y="30" width="20" height="10" fill="yellow" stroke="black" stroke-width=".1"/></Tooltip>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <rect x="80" y="40" width="20" height="10" fill="green" stroke="black" stroke-width=".1"/>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <rect x="0" y="60" width="10" height="10" fill="mediumseagreen" stroke="black" stroke-width=".1" onClick={()=>{ alert('Espacio Elegido'); }} />
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <rect x="20" y="60" width="10" height="10" fill="mediumseagreen" stroke="black" stroke-width=".1" onClick={()=>{ alert('Espacio Elegido'); }} />
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Texto Adicional A Desplegar</Typography>
            <em>{"Contenido "}</em> <b>{'Click'}</b> <u>{'contenido'}</u>.{' '}
            {"Texto Texto Texto?"}
          </React.Fragment>
        }
      >
        <rect x="40" y="60" width="10" height="10" fill="mediumseagreen" stroke="black" stroke-width=".1" onClick={()=>{ alert('Espacio Elegido'); }} />
      </HtmlTooltip>
      <text x="45" y="46" className="svg-texto1">Click Aquí</text>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Texto Adicional A Desplegar</Typography>
            <em>{"Contenido "}</em> <b>{'Click'}</b> <u>{'contenido'}</u>.{' '}
            {"Texto Texto Texto?"}
          </React.Fragment>
        }
      >
          
        <rect x="60" y="60" width="10" height="10" fill="mediumseagreen" stroke="black" stroke-width=".1" onClick={()=>{ alert('Espacio Elegido'); }} />
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <rect x="80" y="60" width="10" height="20" fill="mediumseagreen" stroke="black" stroke-width=".1"/>
      </HtmlTooltip>
    </svg>
  );

const Reserva = () => {
    
    return ( 
        <>
        <Grid container spacing={3} className="plano">
        <Grid item xs={2} style={{padding: '4%'}}></Grid>
        <Grid item xs={8} style={{padding: '2%', paddingBottom: '5%'}}>
        <h2>Elige tu Espacio</h2>
        <SomeOtherComponent />
        </Grid>
        
        </Grid>
        </>
     );
}
 
export default Reserva;