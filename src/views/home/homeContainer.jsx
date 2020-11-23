import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import React, { Component } from "react";
import { connect } from "react-redux";
import HomeView from "./homeView";
import "./styles/styles.css";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      perros: [
        "perros/perro5.jpg",
        "gatos/gato1.jpg",
        "perros/perro6.jpg",
        "gatos/gato2.jpg",
        "perros/perro9.jpg",
      ]
    };
  }

  render() {
    return (
      <div className="home-container" >
        <h1>¡Calidad de vidad para tu mascota!</h1>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
          ride="carousel"
          interval={4000}
          className="carousel"
        >
          <div class="carousel-inner">
            {this.state.perros.map((img, i) => (
              <div key={i} class={`carousel-item home-corousel ${i == 0 && "active"}`}>
                <img
                  src={require("../../assets/" + img)}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            ))}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <article className="home-article">
          <h3>¿Por qué son importantes las mascotas en el entorno familiar?</h3>
          <figure>
            <img src={require("../../assets/home1.jpg")} alt="" />
          </figure>
          <p>
            Desde que los lobos se acercaron a los humanos hace aproximadamente 15
            mil a 20 mil años (según los restos encontrados en civilizaciones antiguas),
            se convirtieron en una parte importante de la vida humana, ahora resulta difícil
            no convivir con ellos, porque se integran fácilmente al entorno social y familiar.
            En el caso específico de los niños, el tener una mascota les permite adquirir un grado
            de responsabilidad, al asignarles tareas como cuidarla, alimentarla y brindarle cariño;
            porque son los perritos quienes devuelven el amor de una manera desinteresada, ellos aman por amar.
          </p>
          <h3>¿Cómo escoger una mascota para el hogar?</h3>
          <figure>
            <img src={require("../../assets/home2.jpg")} alt="" />
          </figure>
          <p>
            El elegir una mascota depende en primera instancia del lugar donde vivirá, una casa o departamento;
            existen perros que aún siendo pequeños necesitan mucho ejercicio, por lo cual necesitará un cuidador
            que tenga dedicación o por lo menos, le brinde las facilidades para que la mascota realice ejercicio
            y conviva con otros perros. Por otro lado, si vivimos en un departamento, la mejor opción es un perro
            tranquilo como los perros falderos, schnauzer, caniches, french poodle que se acomodan muy bien a cualquier
            espacio y no requieren actividad física indispensable, aunque es lo recomendable. Al tomar la decisión
            de integrar a la familia una mascota, es necesario considerar los gastos que implicará, por alimentación,
            espacio para dormir o salud, siendo una responsabilidad que no se debe olvidar.
          </p>
          <h3>¿Por qué es importante el cuidado y protección de las mascotas?</h3>
          <figure>
            <img src={require("../../assets/home3.jpg")} alt="" />
          </figure>
          <p>
            Las mascotas al ser miembros de la familia merecen nuestra atención y cuidado, en muchos casos son un hijo más,
            por ello, al comprometernos a cuidarlas debemos satisfacer sus necesidades médicas, de alimento y aseo adecuado,
            de lo contrario el animalito se enfermará ocasionando alteraciones en su comportamiento y lo que buscamos es que
            todos estén felices dentro del hogar.
          </p>
          <h3>¿Cuán importante es el baño de nuestras mascotas?</h3>
          <figure>
            <img src={require("../../assets/home4.jpg")} alt="" />
          </figure>
          <p>
            En cuanto a la higiene, si bien se dice que un perro nunca debe ser bañado, hay que meditar que actualmente los
            cachorros son de diferentes razas y han desarrollado en ciertos casos pelajes grandes y espesos, eso requiere de
            un cuidado que por ejemplo, los animales salvajes no necesitan puesto que, de manera natural, eliminan la suciedad.
            Es recomendable bañar a los perros cuando sea necesario, sin olvidar que el primer baño a los cachorritos, no debe
            hacerse antes de que hayan recibido todas las vacunas, es decir, aproximadamente a los 4 meses de edad, una vez vacunado
            puede recibir un baño tradicional con agua y shampoo para perros, evitando así complicaciones en su piel y salud.
          </p>
          <h3>¿Con qué frecuencia se debe bañar a los cachorritos?</h3>
          <figure>
            <img src={require("../../assets/home5.jpg")} alt="" />
          </figure>
          <p>
            El baño debe hacerse de cada 4 a 5 semanas, no más de eso, porque se puede resecar la piel y tener problemas con el pelaje.
          </p>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, {})(HomeContainer);