import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework2Component } from './components/homework2/homework2.component';
import { Homework3Component } from './components/homework3/homework3.component';
import { Parent1Component } from './components/parent1/parent1.component';
import { Child1Component } from './components/child1/child1.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { Child2Component } from './components/child2/child2.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { HighlightDirectiveComponent } from './components/highlight-directive/highlight-directive.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessAnimComponent } from './components/unless-anim/unless-anim.component';
import { UnlessStyleDirective } from './unless-style.directive';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Homework4Component } from './components/homework4/homework4.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AvenLogoComponent } from './components/aven-logo/aven-logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Homework2Component,
    Homework3Component,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    NgswitchComponent,
    HighlightDirectiveComponent,
    HighlightDirective,
    UnlessAnimComponent,
    UnlessStyleDirective,
    LoginFormComponent,
    Homework4Component,
    SignupFormComponent,
    AvenLogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
