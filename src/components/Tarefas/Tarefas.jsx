import { motion, AnimatePresence } from "framer-motion";

import ClearIcon from "@mui/icons-material/Clear";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

import style from "./Tarefas.module.css";

const MAX_LENGTH = 28; // número máximo de caracteres visíveis

function cortarTexto(texto, limite) {
    return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
}

const Tarefas = ({ tarefas, removerTarefa, mostrarDetalhesTarefa }) => {
    return (
        <div className={style.container}>
            <ul>
                <AnimatePresence>
                    {tarefas.map((tarefa) => (
                        <motion.li
                            key={tarefa.id}
                            initial={{ opacity: 0, y: -70 }}
                            exit={{ opacity: 0, x: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {cortarTexto(tarefa.titulo, MAX_LENGTH)}

                            <div className={style.buttonsAction}>
                                <button
                                    className={style.buttonDetail}
                                    onClick={() =>
                                        mostrarDetalhesTarefa(tarefa.id)
                                    }
                                >
                                    <DensityMediumIcon fontSize="x-small" />
                                </button>

                                <button
                                    className={style.buttonDelete}
                                    onClick={() => removerTarefa(tarefa.id)}
                                >
                                    <ClearIcon fontSize="small" />
                                </button>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default Tarefas;
