// ==================
// APP ROUTING MODULE
// ==================

// IMPORTS
// =================
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

// ROUTER
// ==================
const routes: Routes = [
    // Go To Default Page
    { path: '', component: MainComponent},

    // Go To Main Page
    { path: 'main', component: MainComponent},
];

// APP ROUTING MODULE
// ===========================
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
