import React, { Component } from "react";
import Swal from 'sweetalert2';
import { API } from '../../../../../api';
import saveFile from '../../../../../components/files';
import CitasView from "./CitasView";

class CitasContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citas: [],
            newCita: {
                nombre: '',
                descripcion: '',
                fecha: ""
            },
            isRegister: true,
            idToEdit: 0,
            clear: false
        };
    }

    componentDidMount() {
        API.GET(['cita']).then(async (res) => {
            const citas = await res[0].then(({ data }) => data.data);
            console.log(citas);
            this.setState({ citas });
            console.log(this.state.citas);
        }
        )
    }

    reset() {
        this.setState({
            newCita: {
                nombre: '',
                descripcion: '',
                imagen: null
            },
            isRegister: true,
            idToEdit: 0,
            img: null,
            file: null,
            clear: false
        });
        this.componentDidMount();
    }

    onChange({ name, value }) {
        let { newCita } = this.state;
        this.setState({
            newCita: {
                ...newCita,
                [name]: value,
            },
            clear: true
        });
        console.log(this.state.newCita);
    }


    saveData() {
        if (this.state.isRegister) {
            this.register();
        } else {
            this.modify()
        }
    }

    async register() {
        let { newCita } = this.state;
        API.POST("/cita", newCita)
            .then(({ data }) => {
                if (data.ok) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Registro exito!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.reset();
                } else {
                    alert("Error al registrarse")
                }
            })
            .catch(e => alert("Error al registrarse"))
    }

    async modify() {
        let { newCita, idToEdit, file } = this.state;
        API.PUT(`/cita/${idToEdit}`, newCita)
            .then(({ data }) => {
                if (data.ok) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Cita editada correctamente!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.reset();
                } else {
                    alert("Error al editar")
                }
            })
            .catch(e => alert("Error al editar"))
    }

    delete(id) {
        console.log(id);
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: "¿Deseas eliminar?",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            timer: 1500,

        }).then((value) => {
            if (value.isConfirmed) {
                API.DEL(`/cita/${id}`).then(({ data }) => {
                    if (data.ok) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "Se eliminó con exito!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.reset();
                    } else {
                        alert("Error al eliminar")
                    }
                })
                    .catch(e => alert("Error al eliminar"))
            }
        })
    }

    toggleType(isRegister, newCita) {
        if (newCita) {
            this.setState({ isRegister, newCita, idToEdit: newCita.id });
        } else {
            this.setState({ isRegister });

        }
    }

    render() {
        return (
            <CitasView
                clear={this.state.clear}
                citas={this.state.citas}
                img={this.state.img}
                isRegister={this.state.isRegister}
                cita={this.state.newCita}
                onChange={(value) => this.onChange(value)}
                save={() => this.saveData()}
                deleteTip={(value) => this.delete(value)}
                toggleType={(value1, value2) => this.toggleType(value1, value2)}
                reset={() => this.reset()}
                setState={(values) => this.setState(values)}
            />
        );
    }
}

export default CitasContainer;