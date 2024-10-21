import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initialpage',
  standalone: true,
  imports: [
    HeaderComponent,
    TableModule,
    CommonModule
  ],
  templateUrl: './initialpage.component.html',
  styleUrl: './initialpage.component.scss'
})
export class InitialpageComponent {


}
