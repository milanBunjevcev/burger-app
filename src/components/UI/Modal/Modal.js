import React from "react";

import classes from "./Modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import BackDrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Auxiliary>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-10vh)",
                opacity: props.show ? "1" : "0",
            }}
        >
            {props.children}
        </div>
    </Auxiliary>
);

export default modal;
