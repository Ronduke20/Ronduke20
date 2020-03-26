import { RouterModule, Routes } from '@angular/router';
 //import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { MujeresComponent } from './mujeres/mujeres.component';
import { HombresComponent } from './hombres/hombres.component';
import { MarcasComponent } from './marcas/marcas.component';
import { PumaComponent } from './puma/puma.component';
import { AdidasComponent } from './adidas/adidas.component';
import { NikeComponent } from './nike/nike.component';
import { RebookComponent } from './rebook/rebook.component';



const routes: Routes = [
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'mujeres', component: MujeresComponent },
  { path: 'hombres', component: HombresComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'puma', component: PumaComponent },
  { path: 'adidas', component: AdidasComponent },
  { path: 'nike', component: NikeComponent },
  { path: 'rebook', component: RebookComponent },
  { path: '**', redirectTo:'inicio',  pathMatch: 'full' }
];

@NgModule({
  
  declarations: [
    AppComponent,
    ConocenosComponent,
    InicioComponent,
    MujeresComponent,
    HombresComponent,
    MarcasComponent,
    PumaComponent,
    AdidasComponent,
    NikeComponent,
    RebookComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
