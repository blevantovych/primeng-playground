import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { EdmComponent } from './table-usage/edm.component';

import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { SizerComponent } from './app-sizer.component';
import {RainbowDirective } from './rainbow.directive';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        EdmComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        SizerComponent,
        RainbowDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        TooltipModule,
        ReactiveFormsModule,
        AutoCompleteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
