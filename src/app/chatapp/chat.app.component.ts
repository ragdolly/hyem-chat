import {Component} from '@angular/core';
import '../../../public/css/styles.css';

import {ChatService, Message} from '../shared/services/chat.service';
import {WebSocketService} from '../shared/services/websocket.service';

@Component({
    selector: 'my-chat-app',
    templateUrl: `
        <main>
            <h1>HyemChat</h1>
            <div>
                <input type="text" 
                       pInputText 
                       [(ngModel)]="message"/>
            </div>  
            <div>
                <button pButton 
                        type="text" 
                        (click)="sendMessage()"
                        [disabled]="!message.trim().length" 
                        label="Send">
                </button>
            </div>   
            <div>
                <p *ngFor="let msg of messages">{{msg.author}} says ({{msg.message}})</p>
            </div>
        </main>

    `,
    providers: [WebSocketService, ChatService]
})

export class ChatAppComponent {

    public messages : Message[] = [];

    public message : string = "";

    constructor(private chatService: ChatService) {
        chatService.messages.subscribe(msg => {
            this.messages.push(msg);
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
