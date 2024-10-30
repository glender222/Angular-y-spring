import { CarreraService } from './services/carrera.service';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Carrera } from './models/carrera';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule aquí
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [CardModule, SidebarComponent, PanelModule, TableModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent {
  carreras: Carrera[]=[];

  constructor(private carreraService: CarreraService) {}
  ngOnInit() {
     this.listarCarreras();
    }
    listarCarreras(){
      this.carreraService.getCarreras().subscribe((data)=>{
          this.carreras=data;
      });
    }
}
