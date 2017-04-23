
import { Injectable, EventEmitter } from '@angular/core';
 
@Injectable()
export class ChatroomService {
 
    private socket: WebSocket;
    private listener: EventEmitter<any> = new EventEmitter();
 
    public constructor() {
        // this.socket = new WebSocket("ws://ws:8888");
        // this.socket = new WebSocket("ws://echo.websocket.org/");
        this.socket = new WebSocket("ws://aws.yellowducky.co:8888","echo-protocol");
        // this.socket.onopen = event => {
        //     this.listener.emit({"type": "open", "data": event});
        // }
        // this.socket.onclose = event => {
        //     this.listener.emit({"type": "close", "data": event});
        // }
        this.socket.onmessage = event => {
            // this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
            this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
        }
    }
 
    public send(data: string) {
        this.socket.send(data);
    }
 
    public close() {
        this.socket.close();
    }
 
    public getEventListener() {
        return this.listener;
    }
 
}