import {Component} from '@angular/core';
import '../../../public/css/styles.css';
import {Router} from "@angular/router";

@Component({
    selector: 'log-in',
    styleUrls: ['./log.in.component.css'],
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

export class LogInComponent {
    private username : string = "";

    constructor(private router : Router) {

    }

    private onLogin() : void {
        this.router.navigate(["./chat", this.username]);
    }
}
