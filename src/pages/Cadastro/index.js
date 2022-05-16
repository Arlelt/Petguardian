
import './index.scss'
import { Link } from 'react-router-dom';

export default function Cadastro() {
    return (
        <main className="page-cadastro">
            <section class="sec-1">
                <img class="logo-sec1" src="./images/Logo.png.crdownload" alt="" />
                <h1 class="h1-sec1">Amor de verdade não se <br /> compra, se encontra.</h1>
                <img class="img-cat" src="./images/Gatão.png" alt="" />
            </section>
            <section class="sec-2">
                <h1 class="h1-divs">Criar nova conta</h1>
                <div class="div-cadastro">
                    <img class="mail" src="./images/Mail.png" alt="" />
                    <input class="input-cadastro" type="text" />
                </div>
                <div class="div-cadastro2">
                    <img class="male" src="./images/User Male.png" alt="" />
                    <input class="input-cadastro" type="text" />
                </div>
                <div class="div-cadastro2">
                    <img class="key" src="./images//Key.png" alt="" />
                    <input class="input-cadastro" type="password" />
                </div>
                <div class="div-cadastro2">
                    <img class="calendario" src="./images/Calendáro.png" alt="" />
                    <input class="input-cadastro" type="date" />
                </div>
                <div class="div-cadastro2">
                    <img class="map-marker" src="./images/Map Marker.png" alt="" />
                    <input class="input-cadastro" type="text" />
                </div>
                <div class="div-cadastrar">
                    <Link class="bot-cadastrar" to='/feed'>Cadastrar</Link>
                </div>
                <p class="entrar-cad">Já tem uma conta? <Link to='/Login' >Entrar</Link></p>
            </section>
        </main>
    );
}