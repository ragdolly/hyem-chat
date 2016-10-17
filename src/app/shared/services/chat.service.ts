import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { WebSocketService } from './websocket.service';

const CHAT_URL = 'ws://localhost:8000';

export interface Message {
    author: string,
    message: string,
    newDate?: string
}

export interface Channel {
    id: number;
    name: string;
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;
    public channels : Subject<any>;

    constructor(private wsService: WebSocketService) {
        this.channels = <Subject<any>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): Channel[] => {
                let data = JSON.parse(response.data);
                return data.data.channels;
            });
    }
}