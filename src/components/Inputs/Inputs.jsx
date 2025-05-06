import React, { useState } from "react";

import style from "./Inputs.module.css";

const Inputs = ({ salvarTarefa }) => {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    function cancelarTarefa() {
        setTitulo("");
        setDescricao("");
    }

    return (
        <div className={style.container}>
            <div className={style.inputs}>
                <input
                    type="text"
                    value={titulo}
                    placeholder="Título da tarefa"
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <input
                    type="text"
                    value={descricao}
                    placeholder="Descrição da tarefa"
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>

            <div className={style.buttons}>
                <button className={style.cancelar} onClick={cancelarTarefa}>
                    Cancelar
                </button>

                <button
                    className={style.salvar}
                    onClick={() => salvarTarefa(titulo, descricao)}
                >
                    Salvar
                </button>
            </div>
        </div>
    );
};

export default Inputs;
