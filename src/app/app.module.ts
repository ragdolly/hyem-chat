import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ChatAppComponent } from './chatapp/chat.app.component';

// prime-ng
import {InputTextModule, ButtonModule} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        InputTextModule,
        ButtonModule
    ],
    declarations: [
        AppComponent,
        ChatAppComponent
    ],
    bootstrap: [ ChatAppComponent ]
})
export class AppModule { }
