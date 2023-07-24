import WebSocket from "ws";

const wss = new WebSocket.Server({port: 4040})

wss.on("connection", (ws: WebSocket) => {
     console.log("WebSocket Connected");
})


export default wss