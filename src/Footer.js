import React from "react";
import Grid from "@material-ui/core/Grid";

const Footer = () => (
  <footer className="footer-area">
    <Grid container spacing={3}>
      <Grid item lg={4} xs={12}>
        <div className="single-address text-center">
          <div className="addres-icon">
            <img src="img/icon/1.png" alt=""></img>
          </div>
          <h3>Ubicación Estacionamiento</h3>
          <p>
            Carretera Mesa de Andrade Km. 23.5, <br />Col. Mariano Abasolo <br />
            Mexicali, Baja California
          </p>
        </div>
      </Grid>
      <Grid item lg={4} xs={12}>
        <div className="col-xl-4 col-md-4">
          <div className="single-address text-center">
            <div className="addres-icon">
              <img src="img/icon/2.png" alt=""></img>
            </div>
            <h3>Horario de atención</h3>
            <p>
              <h3>24 Hrs, 7 Días a la semana.</h3>
            </p>
          </div>
        </div>
      </Grid>
      <Grid item lg={4} xs={12}>
        <div className="col-xl-4 col-md-4">
          <div className="single-address text-center">
            <div className="addres-icon">
              <img src="img/icon/3.png" alt=""></img>
            </div>
            <h3>Oficina de Atención</h3>
            <p>
              Moyahua # 240 Col. Zacatecas<br/>
              C.P. 21090 <br/>
              Mexicali, Baja California
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  </footer>
);

export default Footer;
