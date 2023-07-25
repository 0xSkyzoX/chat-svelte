import { Constants } from "./Constants";
import { EventTypes } from "./datatypes";

export default class Events {
     
     constructor() {
          
     }
     
     public async listen(Event: EventTypes, fn: (params: any) => void) {
          try {
               const socket = new WebSocket(Constants.GATEWAY)

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