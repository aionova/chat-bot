const { SocketClient } = require("@cognigy/socket-client");
const { REACT_APP_ENDPOINT_BASE_URL, REACT_APP_ENDPOINT_URL_TOKEN } = process.env;

export const connectToSocketClient = async () => {
    const client = new SocketClient(REACT_APP_ENDPOINT_BASE_URL, REACT_APP_ENDPOINT_URL_TOKEN, {
        forceWebsockets: true,
    });
    await client.connect();

    return client;
};

export type SocketClientType = typeof SocketClient;