import {Component} from '@angular/core';
import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: `
        <main>
            <h1>HyemChat</h1>
            <div>
                <input type="text" 
                       pInputText 
                       [(ngModel)]="username"
                       placeholder="Enter username"/>
            </div>  
            <div>
                <button pButton 
                        type="text" 
                        (click)="onLogin()"
                        [disabled]="!username.trim().length" 
                        label="Log In">
                </button>
            </div>   
        </main>

    `
})

export class AppComponent {
    username : string = "";
}
