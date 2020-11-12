import React, { Component } from "react";
import Swal from 'sweetalert2';
import { API } from '../../../../api';
import TipsAdminView from "./TipsAdminView";

class TipsAdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tips: [],
            newTip: {
                nombre: '',
                descripcion: '',
            },
            isRegister: true,
            idToEdit: 0,
        };
    }

    componentDidMount() {
        API.GET(['tips']).then(async (res) => {
            const tips = await res[0].then(({ data }) => data.data);
            console.log(tips);
            this.setState({ tips });
            console.log(this.state.tips);
        }
        )
    }

    onChange({ name, value }) {
        let { newTip } = this.state;
        this.setState({
            newTip: {
                ...newTip,
                [name]: value,
            }
        });
        console.log(this.state.newTip);
    }


    saveData() {
        if (this.state.isRegister) {
            this.register();
        } else {
            this.modify()
        }
    }

    register() {
        let { newTip } = this.state;
        let data = {
            ...newTip,
        }

        API.POST("/tips", data)
            .then(({ data }) => {
                console.log(data)
                if (data.ok) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Registro exito!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.componentDidMount();
                } else {
                    alert("Error al registrarse")
                }
            })
            .catch(e => alert("Error al registrarse"))
    }

    modify() {
        let { newTip, idToEdit } = this.state;
        let data = {
            ...newTip,
        }

        API.PUT(`/tips/${idToEdit}`, data)
            .then(({ data }) => {
                console.log(data)
                if (data.ok) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Tip editado correctamente!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.componentDidMount();
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
                API.DEL(`/tips/${id}`).then(({ data }) => {
                    console.log(data)
                    if (data.ok) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: "Se eliminó con exito!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.componentDidMount();
                    } else {
                        alert("Error al eliminar")
                    }
                })
                    .catch(e => alert("Error al eliminar"))
            }
        })
    }

    toggleType(isRegister, newTip) {
        if (newTip) {
            const { nombre, descripcion, id } = newTip;
            this.setState({ isRegister, newTip: { nombre, descripcion }, idToEdit: id });
        } else {
            this.setState({ isRegister });

        }
    }

    render() {
        return (
            <TipsAdminView
                tips={this.state.tips}
                FonChange={(value) => this.onChange(value)}
                save={() => this.saveData()}
                deleteTip={(value) => this.delete(value)}
                toggleType={(value1, value2) => this.toggleType(value1, value2)}
                isRegister={this.state.isRegister}
                tip={this.state.newTip}
            />
        );
    }
}

export default TipsAdminContainer;