import {MessageTypeEnum} from "./MessageTypeEnum";

export type Message = {
    id: number,
    title: string,
    type: MessageTypeEnum,
};
