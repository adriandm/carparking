import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function ContainerWeb() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <br/><br/>
        Contenedor
      </Container>
    </React.Fragment>
  );
}