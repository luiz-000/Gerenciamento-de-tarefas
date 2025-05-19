import { useState } from "react";
import { nanoid } from "nanoid";

import style from "./Home.module.css";

import Title from "../../components/Title/Title";
import Inputs from "../../components/Inputs/Inputs";
import Tarefas from "../../components/Tarefas/Tarefas";
import DialogDetalhes from "../../components/DialogDetalhes/DialogDetalhes";

const Home = () => {
    const [tarefas, setTarefas] = useState([]);
    const [detalhesTarefa, setDetalhesTarefa] = useState(null);
    const [visibleDialog, setVisibleDialog] = useState(false);

    function salvarTarefa(titulo, descricao) {
        const novaTarefa = {
            id: nanoid(),
            titulo: titulo,
            descricao: descricao,
        };

        if (novaTarefa.titulo === "" || novaTarefa.descricao === "") {
            return alert("Preencha os campos");
        }
        setTarefas([...tarefas, novaTarefa]);
    }

    function removerTarefa(id) {
        const tarefasRestantes = tarefas.filter((tarefa) => tarefa.id !== id);
        setTarefas(tarefasRestantes);
    }

    function mostrarDetalhesTarefa(id) {
        const buscaTarefa = tarefas.find((tarefa) => tarefa.id === id);

        setDetalhesTarefa(buscaTarefa);
        setVisibleDialog(true);
    }

    return (
        <div className={style.container}>
            <Title />
            <Inputs salvarTarefa={salvarTarefa} />
            <Tarefas
                tarefas={tarefas}
                removerTarefa={removerTarefa}
                mostrarDetalhesTarefa={mostrarDetalhesTarefa}
            />

            <DialogDetalhes
                open={visibleDialog}
                onClose={() => setVisibleDialog(false)}
                detalhesTarefa={detalhesTarefa}
            />
        </div>
    );
};

export default Home;
