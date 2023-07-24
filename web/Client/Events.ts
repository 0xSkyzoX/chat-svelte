import { EventTypes } from "./datatypes";

export default class Events {
     
     constructor() {
          
     }
     
     public async listen(Event: EventTypes, fn: (params: any) => void) {
          try {
               const socket = new WebSocket("ws://192.168.8.119:4040")

               socket.addEventListener('open', (ws) => {
                    console.log("WebSocket Connected")
               })
               socket.addEventListener('message', (ws) => {
                    fn(JSON.parse(ws.data))
               })
          } catch(err) {
               console.log(err)
          }
     }

}