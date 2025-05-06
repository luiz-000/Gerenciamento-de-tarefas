import React from "react";

import style from "./Tarefas.module.css";

const Tarefas = ({ tarefas }) => {
    return (
        <div className={style.container}>
            <ul>
                {tarefas.map((tarefas, index) => (
                    <li key={index}>
                        {tarefas.titulo}
                        <button> algo </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tarefas;
