import WebSocket from "ws";
import { MessageInfo } from "../datatypes";
import { Constants } from "../Constants";

export default class Message {
     constructor() {

     }

     public async send(message: MessageInfo) {
          try {
               const reponse = await fetch(`${Constants.API_BASE}/messages/send`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({message: message})
               })
               if (!reponse.ok) {
                    return console.log("Error Code", reponse.status)
               }
          } catch(err) {
               console.log(err)
          }
     }
     public async get() {
          try {
               const response = await fetch(`${Constants.API_BASE}/messages/get`, {
                    method: "GET",
                    headers: {
                         "Constent-Type":"application/json"
                    }
               })
               const data = await response.json()
               if (response.ok) {
                    return data
               }
          }catch(err) {
               console.log(err)
          }
     }

}