import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home'
  },{
    path:'alumno',
    component:AlumnoComponent,
    title:'Alumno'
  },{
    path:'carrera',
    component:CarreraComponent,
    title:'Carrera'
  },{
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];
