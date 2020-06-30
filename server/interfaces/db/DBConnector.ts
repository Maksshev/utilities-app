
interface DBConnector {
    connect();
    successCallback(): boolean;
    errorCallback(e: Error): boolean;
    disconnect();
}

export {DBConnector}
