import {FC, useEffect, useRef, useState} from "react";
import {History} from "../History";
import {MessageRow} from "../MessageRow";
import {Input} from "../Input";
import {useDispatch, useSelector} from "react-redux";
import {connectToSocketClient, SocketClientType} from "../../api/SocketClient";
import {addIncomingAction} from "../../store/actions";
import {MessageTypeEnum} from "../../types/MessageTypeEnum";
import {selectMessages} from "../../store/selectors";
import {SocketOutput} from "../../types/SocketOutput";
import styles from './Chat.module.scss';

const Chat: FC = () => {
    const [socketClient, setSocketClient] = useState<SocketClientType>(null);
    const dispatch = useDispatch();
    const messageRef = useRef<HTMLDivElement>(null);
    const messages = useSelector(selectMessages);

    useEffect(() => {
        connectToSocketClient()
            .then((client) => {
                setSocketClient(client);
                client.on("output", (output: SocketOutput) => {
                    dispatch(addIncomingAction(output.text));
                });
            });
    }, [])

    useEffect(() => {
       const lastMessage = messages[messages.length - 1];
       if (lastMessage && lastMessage.type === MessageTypeEnum.OUTCOMING) {
           socketClient.sendMessage(lastMessage.title)
       }

        if (messageRef.current) {
            messageRef.current.scrollIntoView();
        }
    }, [messages])

    return (
        <div className={styles.chat}>
            <History>
                {messages?.map((message) => (
                    <MessageRow direction={message.type} key={message.id}>
                        {message.title}
                    </MessageRow>
                ))}
                <div ref={messageRef} />
            </History>
            <Input />
        </div>
    )
}

export default Chat;