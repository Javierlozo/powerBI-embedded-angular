// ==========================================
// APP MODULE
// ==========================================

// IMPORTS
// =====================

// ANGULAR
// -------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// POWER BI
// -------------------------
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { MainComponent } from './main/main.component';

// MODULE
// ==========================
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    // Angular Modules
    // ------------------------
    BrowserModule,
    // PowerBI Module
    // ------------------------
    PowerBIEmbedModule,
    // Routing Module
    // ------------------------
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
