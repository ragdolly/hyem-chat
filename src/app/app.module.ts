import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './login/log.in.component';
import { ChatAppComponent } from './chatapp/chat.app.component';

// prime-ng
import {InputTextModule, ButtonModule} from 'primeng/primeng';


const routes : Routes = [
    {path: "", component: LogInComponent},
    {path: "chat/:username", component: ChatAppComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        InputTextModule,
        ButtonModule
    ],
    declarations: [
        AppComponent,
        LogInComponent,
        ChatAppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
