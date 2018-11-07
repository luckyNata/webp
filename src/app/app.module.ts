import { NgModule } from '@angular/core'
import {APP_BASE_HREF, CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router'
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule, BrowserModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
