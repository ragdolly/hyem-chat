import {Component, OnInit} from '@angular/core';
import '../../../public/css/styles.css';

import {ChatService, Message, Channel} from '../shared/services/chat.service';
import {ActivatedRoute, Params} from "@angular/router";
import {WebSocketService} from "../shared/services/websocket.service";

@Component({
    selector: 'my-chat-app',
    templateUrl: './chat.app.component.html',
    providers: [ChatService, WebSocketService]
})

export class ChatAppComponent implements OnInit {

    public messages : Message[] = [];

    public message : string = "";

    public channels : Channel[];

    private username : string;

    constructor(private route : ActivatedRoute, private chatService: ChatService) {
        chatService.channels.subscribe(channels => {
            // this.messages.push(msg);
            this.channels = channels;
        });
    }

    ngOnInit() : void {
        this.route.params.forEach((params: Params) => {
            this.username = params["username"];
        });
    }

    public sendMessage() : void {
        const msg : Message = {
            author : "Jiwoong",
            message : this.message
        };

        this.chatService.messages.next(msg);
        this.message = "";
    }

}
