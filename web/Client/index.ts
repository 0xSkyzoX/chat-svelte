import Message from "./Message/message";
import Events from "./Events";

export default class Client {
     message: Message;
     event: Events;
     constructor() {
          this.message = new Message()
          this.event = new Events()
     }
}