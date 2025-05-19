import { useEffect, useState } from "react";
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

    //Uma flag que controla se os dados salvos no localStorage já foram carregados - (libera a gravação no localStorage somente depois de carregar os dados salvos)
    const [carregouDoStorage, setCarregouDoStorage] = useState(false);

    //Carrega as tarefas salvas no localStorage e adiciona no estado tarefas - (executado somente quando a page é recarregada)
    useEffect(() => {
        //Lê as tarefas salvas no localStorage
        const tarefasSalvas = localStorage.getItem("tarefas");

        //Se conseguiu ler as tarefas salvas
        if (tarefasSalvas) {
            try {
                const converte = JSON.parse(tarefasSalvas);

                if (Array.isArray(converte)) {
                    //Adiciona as tarefas no estado
                    setTarefas(converte);
                }
            } catch (error) {
                console.error("Erro ao carregar as tarefas: ", error);
            }
        }
        //O estado carregouDoStorage vira true e isso permite que a instrução do próximo useEffect seja executada
        setCarregouDoStorage(true);
    }, []);

    //Armazena as tarefas no localStorage
    useEffect(() => {
        //Com isso evita que durante o recarregamento da pagina o estado (tarefas) seja sobreescrito para [] (vazio)
        if (carregouDoStorage) {
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
        }
    }, [tarefas, carregouDoStorage]);

    function salvarTarefa(titulo, descricao) {
        const novaTarefa = {
            id: nanoid(),
            titulo: titulo,
            descricao: descricao,
        };

        if (!titulo || !descricao) {
            return alert("Preencha os campos");
        }
        setTarefas((prev) => [...prev, novaTarefa]);
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
