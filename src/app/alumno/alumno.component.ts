import { AlumnoService } from './services/alumno.service';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [SidebarComponent,CardModule, PanelModule,TableModule,CommonModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  alumnos!: Alumno[];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit() {

    }
  }
