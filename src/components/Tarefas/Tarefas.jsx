import { motion, AnimatePresence } from "framer-motion";

import ClearIcon from "@mui/icons-material/Clear";

import style from "./Tarefas.module.css";

const Tarefas = ({ tarefas, removerTarefa }) => {
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
                            {tarefa.titulo}
                            <button onClick={() => removerTarefa(tarefa.id)}>
                                <ClearIcon />
                            </button>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default Tarefas;
