import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links = [
    {
      id: 1,
      label: 'Educação',
      href: '#education',
    },
    {
      id: 2,
      label: 'Experiência',
      href: '#experience',
    },
    {
      id: 3,
      label: 'Tecnologias',
      href: '#technologies',
    },
    {
      id: 4,
      label: 'Projetos',
      href: '#projects',
    },
    {
      id: 5,
      label: 'Contato',
      href: '#contact',
    },
  ];
}
