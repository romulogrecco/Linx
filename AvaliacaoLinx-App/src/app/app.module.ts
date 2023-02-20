import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './core/core.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PagesModule,
        CoreModule,
        MatTableModule,
        MatDialogModule,
        MatIconModule,
        NgxMaskModule.forRoot(),
        NgxUiLoaderModule,
        NgxUiLoaderHttpModule.forRoot({
          showForeground: true
        }),
    ]
})
export class AppModule { }
