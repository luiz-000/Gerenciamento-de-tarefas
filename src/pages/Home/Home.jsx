import React, { useState } from "react";

import style from "./Home.module.css";

import Title from "../../components/Title/Title";
import Inputs from "../../components/Inputs/Inputs";
import Tarefas from "../../components/Tarefas/Tarefas";

const Home = () => {
    const [tarefas, setTarefas] = useState([]);

    function salvarTarefa(titulo, descricao) {
        const novaTarefa = { titulo: titulo, descricao: descricao };

        if (novaTarefa.titulo === "" || novaTarefa.descricao === "") {
            return alert("Preencha os campos");
        }
        setTarefas([...tarefas, novaTarefa]);
    }

    return (
        <div className={style.container}>
            <Title />
            <Inputs salvarTarefa={salvarTarefa} />
            <Tarefas tarefas={tarefas} />
        </div>
    );
};

export default Home;
