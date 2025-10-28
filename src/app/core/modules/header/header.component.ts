import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen = false;

  links = [
    { id: 1, label: 'Educação', href: '#education' },
    { id: 2, label: 'Habilidades', href: '#skill' },
    { id: 3, label: 'Experiência', href: '#experience' },
    { id: 4, label: 'Tecnologias', href: '#technologies' },
    { id: 5, label: 'Projetos', href: '#projects' },
    { id: 6, label: 'Contato', href: '#contact' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
