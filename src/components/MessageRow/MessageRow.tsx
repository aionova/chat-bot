import React, {FC} from "react";
import {MessageTypeEnum} from "../../types/MessageTypeEnum";
import styles from './MessageRow.module.scss';

interface MessageProps {
    direction: MessageTypeEnum;
}

export const MessageRow: FC<MessageProps> = (props) => {
    const { direction } = props;

    return (
        <div
            className={styles.messageRow}
            style={{
                alignSelf: direction === MessageTypeEnum.INCOMING ? "flex-start" : "flex-end",
                borderRadius: direction === MessageTypeEnum.INCOMING ? "3px 15px 15px 15px" : "15px 3px 15px 15px",
            }}
        >
            {props.children}
        </div>
    );
};
