import React, { FC, FormEventHandler, useState } from "react";
import {addOutcomingAction} from "../../store/actions";
import {useDispatch} from "react-redux";
import styles from './Input.module.scss';

export const Input: FC = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (message !== "") {
            dispatch(addOutcomingAction(message));
            setMessage("");
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <input
                className={styles.input}
                placeholder="type here"
                autoFocus
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className={styles.button} type="submit">
                <img
                    src="./sendLogo.png"
                    alt="send button"
                    className={styles.sendImg}
                />
            </button>
        </form>
    );
};