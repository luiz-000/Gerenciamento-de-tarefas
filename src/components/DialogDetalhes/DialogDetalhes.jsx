import { forwardRef } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { styled } from "@mui/material/styles";
import style from "./DialogDetalhes.module.css";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = styled(Dialog)(({}) => ({
    "& .MuiDialog-paper": {
        width: "577px",
        height: "auto",

        borderRadius: "25px",
        borderWidth: "1px",
    },
}));

const CustomTittle = styled(DialogTitle)(({}) => ({
    textAlign: "center",
    fontFamily: "Poppins",

    color: "rgb(122, 122, 250)",
}));

const CustomButton = styled(Button)(({}) => ({
    borderRadius: "25px",
    color: "rgb(122, 122, 250)",

    "&:hover": {
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(127, 189, 230)",

        transition: "all 0.7s ease-in-out",
    },
}));

const DialogDetalhes = ({ open, onClose, detalhesTarefa }) => {
    if (!detalhesTarefa) return null;

    return (
        <CustomDialog
            open={open}
            onClose={onClose}
            keepMounted
            slots={{ transition: Transition }}
        >
            <CustomTittle> DETALHES DA TAREFA </CustomTittle>

            <DialogContent>
                <div className={style.containerTitulo}>
                    <h4> Titulo: </h4>
                    <p>{detalhesTarefa.titulo} </p>
                </div>

                <div className={style.containerDescricao}>
                    <h4> Descrição: </h4>
                    <p>{detalhesTarefa.descricao} </p>
                </div>
            </DialogContent>

            <DialogActions sx={{ borderRadius: "25px" }}>
                <CustomButton onClick={onClose}>
                    <ExitToAppIcon />
                </CustomButton>
            </DialogActions>
        </CustomDialog>
    );
};

export default DialogDetalhes;
