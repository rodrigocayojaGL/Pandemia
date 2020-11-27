import React, { Component } from "react";
import fc from "../assests/images/036-facebook.png";
import tw from "../assests/images/008-twitter.png";
import is from "../assests/images/029-instagram.png";


export default class Footer extends Component {
  render() {
    return (
      <footer  className="margin20">
        <div id="footer">
          <p className="footer">
            &copy; 2020. turismo.com.ar | todos los derechos reservados.
            desarrollado por: TechCompany
            <div  className="desc">
              <a href="https://www.facebook.com/accordsaludprepaga" className="redesPosicion" > < img src={fc} alt="Conctactos" className= "redes" /></a>
              <a href="https://twitter.com/accordsalud" className="redesPosicion" >< img src={tw} alt="Conctactos" className= "redes" /></a>
              <a href="https://www.instagram.com/accordsalud/" className="redesPosicion">< img src={is} alt="Conctactos" className= "redes" /></a>
            </div>
         </p>      
        </div>
      </footer>
    );
  }
}
