import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadorabiComponent } from './calculadorabi/calculadorabi.component';
import { HistoryComponent } from './history/history.component';


declare module "@angular/core"{
    interface ModuleWithProviders<T = any>{
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'calculadorabi', component: CalculadorabiComponent },
    { path: 'history', component: HistoryComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);