import { Modal } from '@material-ui/core';
import React from 'react';
import ModalView from './components/ModalView';
import Razas from './components/Razas';

import "./styles/styles.css";

const CaracteriesView = ({ testPending, pequeño, mediano, grande, gato, modal, toggleModal, user }) => (
    <div className="carateries-container">
        {(user.correo && !user.rol) && (
             <button disabled={testPending} className={`btn btn-${!testPending?"warning":"primary"} btn-M`} type="button" onClick={() => toggleModal()}>
                {!testPending?"Tu máscota ideal":"Test pendiente"}
            </button>
        )}
        <Modal
            open={modal}
            onClose={() => toggleModal()}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {<ModalView toggleModal={() => toggleModal()} />}
        </Modal>
        <h2>Conoce la los direntes tipos de tamaño y sus caraceristica.</h2>
        <div className="caracteries-card">
            <h2>Perro grande</h2>
            <figure className="mascota">
                <img src={require("../../assets/perros/grande.png")} alt="" />
            </figure>
            <p> <h2>COMIDA</h2>
            Perros de razas grandes Van de los 20 a los 40 kg de peso.
            Su ración diaria oscila entre los 500 y los 590 gramos de concentrado
            <ul>
                    <li>17.700 gr de comida al mes </li>
                    <li>235.000$ comida al mes  </li>
                    <li>4.000.800$ comida al año </li>
                </ul>
                <h2>VACUNAS</h2>
                <p>Las vacunas oscilan entre los $20.000 y los $60.000
                más la consulta del veterinario que está alrededor de $50.000.
            </p>
                <ul>
                    <li> 45 - 50 días: Proteger contra parvovirus y moquillo en cachorros destetados.</li>

                    <li> 60 - 65 días: Proteger contra parvovirus, moquillo, coronavirus, hepatitis
                    infecciosa canina y para influenza individual o combinada.</li>

                    <li> 75 - 80 días: Revacunar contra todas las enfermedades anteriores ya sea
                     de forma individual o de forma combinada.</li>

                    <li>100 - 120 días: Se debe vacunar de forma individual contra rabia y
                    luego cada año se repite la dosis y cada seis meses para las demás enfermedades.</li>
                </ul>
                <p><h2>BAÑO</h2>
            El baño es algo general en todos los tamaños de caninos y depende de varios factores.
             Al ph animal ser diferente de los animales no es recomendable bañarlo muy a menudo pues
              podría generar alergias y demás, pero todo depende de la necesidad del animal y
               el entorno en el que viva. Los especialistas dicen que se podrían bañar mínimo dos
                veces al año, pero puede ser recomendable hacerlo máximo cada 20/30 dias

            </p>
                <ul>
                    <li>el precio para un perro grande esta entre 36.000$ y 75.000$</li>
                </ul>
            </p>


            <Razas razas={grande} />
        </div>
        <div className="caracteries-card">
            <h2>Perro mediano</h2>
            <figure className="mascota">
                <img src={require("../../assets/perros/mediano.png")} alt="" />
            </figure>
            <p> <h2>COMIDA</h2>
            Se consideran perros de raza mediana a partir de los 10 kg hasta los 20 kg.
            En este caso la cantidad diaria recomendada es de 190 a 310 gr de concentrado

            <ul>
                    <li> 9300 gr de comida al mes </li>
                    <li>38.000$ al mes  </li>
                    <li> 456.000$ al año </li>
                </ul>
                <h2>VACUNAS</h2>
                <p>Las vacunas oscilan entre los $20.000 y los $60.000
                más la consulta del veterinario que está alrededor de $50.000.
            </p>
                <ul>
                    <li> 45 - 50 días: Proteger contra parvovirus y moquillo en cachorros destetados.</li>

                    <li> 60 - 65 días: Proteger contra parvovirus, moquillo, coronavirus, hepatitis
                    infecciosa canina y para influenza individual o combinada.</li>

                    <li> 75 - 80 días: Revacunar contra todas las enfermedades anteriores ya sea
                     de forma individual o de forma combinada.</li>

                    <li>100 - 120 días: Se debe vacunar de forma individual contra rabia y
                    luego cada año se repite la dosis y cada seis meses para las demás enfermedades.</li>
                </ul>
                <p><h2>BAÑO</h2>
            El baño es algo general en todos los tamaños de caninos y depende de varios factores.
             Al ph animal ser diferente de los animales no es recomendable bañarlo muy a menudo pues
              podría generar alergias y demás, pero todo depende de la necesidad del animal y
               el entorno en el que viva. Los especialistas dicen que se podrían bañar mínimo dos
                veces al año, pero puede ser recomendable hacerlo máximo cada 20/30 dias

            </p>
                <ul>
                    <li>el precio para un perro mediano esta entre 36.000$ y 41.000 $ </li>
                </ul>
            </p>
            <Razas razas={mediano} />
        </div>
        <div className="caracteries-card">
            <h2>Perro pequeño</h2>
            <figure className="mascota">
                <img src={require("../../assets/perros/pequeño.png")} alt="" />
            </figure>
            <p><h2>comida</h2>
                Una raza que pesa entre 3 y 10 kilos se considera una raza pequeña y la porción ideal de comida diaria es de 90 y 190 gramos de concentrado
                <ul>
                    <li>6000 gr de comida al mes</li>
                    <li>27.000 $ al mes </li>
                    <li>324.000 $ al año</li>
                </ul>
                <h2>VACUNAS</h2>
                <p>Las vacunas oscilan entre los $20.000 y los $60.000
                más la consulta del veterinario que está alrededor de $50.000.
            </p>
                <ul>
                    <li> 45 - 50 días: Proteger contra parvovirus y moquillo en cachorros destetados.</li>

                    <li> 60 - 65 días: Proteger contra parvovirus, moquillo, coronavirus, hepatitis
                    infecciosa canina y para influenza individual o combinada.</li>

                    <li> 75 - 80 días: Revacunar contra todas las enfermedades anteriores ya sea
                     de forma individual o de forma combinada.</li>

                    <li>100 - 120 días: Se debe vacunar de forma individual contra rabia y
                    luego cada año se repite la dosis y cada seis meses para las demás enfermedades.</li>
                </ul>
                <p><h2>BAÑO</h2>
            El baño es algo general en todos los tamaños de caninos y depende de varios factores.
             Al ph animal ser diferente de los animales no es recomendable bañarlo muy a menudo pues
              podría generar alergias y demás, pero todo depende de la necesidad del animal y
               el entorno en el que viva. Los especialistas dicen que se podrían bañar mínimo dos
                veces al año, pero puede ser recomendable hacerlo máximo cada 20/30 dias

            </p>
                <ul>
                    <li>el precio para un perro pequeño esta entre 17.000$ y 36.000$</li>
                </ul>
            </p>


            <Razas razas={pequeño} />
        </div>
        <div className="caracteries-card">
            <h2>Gato</h2>
            <figure className="mascota">
                <img src={require("../../assets/gatos/gato.png")} alt="" />
            </figure>
            <p> <h2>COMIDA</h2>
            Un cachorro de gato precisa alimentarse, al menos, tres veces al día (cada ocho horas).
            Su comida, además, debe ser específica para felinos menores de un año.  Un gato adulto o
            senior (a partir de siete años) tiene suficiente con comer dos veces al día,
             con una separación de entre ocho y doce horas.


             <ul>
                    <li>precio de comida 9.000 - 15.000 500gr</li>
                </ul>

            </p>
            <Razas razas={gato} />
        </div>
        {(user.correo && !user.rol) && !testPending && <button className="btn btn-warning" type="button" onClick={() => toggleModal()}>
            Tu máscota ideal
        </button>}
    </div>
);

export default CaracteriesView;