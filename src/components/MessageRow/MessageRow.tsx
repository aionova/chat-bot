import React, { FC } from "react";
import {MessageTypeEnum} from "../types/MessageTypeEnum";

type MessageDirection = "incoming" | "outgoing";

interface MessageProps {
    direction: MessageTypeEnum;
}

export const MessageRow: FC<MessageProps> = (props) => {
    const { direction } = props;

    return (
        <div
            style={{
                alignSelf: direction === "INCOMING" ? "flex-start" : "flex-end",
                border: "1px solid black",
                padding: 5,
                borderRadius: 5
            }}
        >
            {props.children}
        </div>
    );
};
