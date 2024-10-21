import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule, 
    AvatarModule, 
    InputTextModule, 
    RippleModule, 
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Início',
                icon: 'pi pi-home'
            },
            {
                label: 'Minhas Provas',
                icon: 'pi pi-book',
                badge: '3',
                items: [
                    {
                        label: 'Resultados',
                        icon: 'pi pi-check-square'
                    },
                    {
                        label: 'Fazer Prova',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Ajuda',
                        icon: 'pi pi-info-circle'
                    },
                ]
            },
            {
                label: 'Relatórios de Desempenho',
                icon: 'pi pi-chart-bar'
            },
            {
                label: 'Minha Conta',
                icon: 'pi pi-user',
                items: [
                    {
                        label: 'Configurações',
                        icon: 'pi pi-cog'
                    },
                    {
                        label: 'Suporte Técnico',
                        icon: 'pi pi-envelope'
                    },
                    {
                        label: 'Sair',
                        icon: 'pi pi-sign-out'
                    },
                ]
            }
        ];
    }

}
