import React, { Component } from "react";
import Swal from 'sweetalert2';
import { API } from '../../../../../api';
import saveFile from '../../../../../components/files';
import TipsAdminView from "./TipsAdminView";

class TipsAdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tips: [],
            newTip: {
                nombre: '',
                descripcion: '',
                imagen: null
            },
            isRegister: true,
            idToEdit: 0,
            img: null,
            file: null,
            clear:false
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

    reset() {
        this.setState({
            newTip: {
                nombre: '',
                descripcion: '',
                imagen: null
            },
            isRegister: true,
            idToEdit: 0,
            img: null,
            file: null,
            clear:false
        });
        this.componentDidMount();
    }

    onChange({ name, value }) {
        let { newTip } = this.state;
        this.setState({
            newTip: {
                ...newTip,
                [name]: value,
            },
            clear: true
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

    async register() {
        let { newTip, file } = this.state;
        if (file) newTip.imagen = await saveFile(file);
        API.POST("/tips", newTip)
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
        let { newTip, idToEdit, file } = this.state;
        if (file) newTip.imagen = await saveFile(file);
        API.PUT(`/tips/${idToEdit}`, newTip)
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
                        this.reset();
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
            this.setState({ isRegister, newTip, idToEdit: newTip.id });
        } else {
            this.setState({ isRegister });

        }
    }

    render() {
        return (
            <TipsAdminView
                clear={this.state.clear}
                tips={this.state.tips}
                img={this.state.img}
                isRegister={this.state.isRegister}
                tip={this.state.newTip}
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

export default TipsAdminContainer;