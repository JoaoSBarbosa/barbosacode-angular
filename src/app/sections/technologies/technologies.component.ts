import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  technologies = [
    { name: 'Angular', icon: 'assets/images/icons/angular.svg' },
    { name: 'React', icon: 'assets/images/icons/react.svg' },
    { name: 'Next.js', icon: 'assets/images/icons/nextjs.svg' },
    { name: 'Java', icon: 'assets/images/icons/java.svg' },
    { name: 'Spring', icon: 'assets/images/icons/spring.svg' },
    { name: 'Docker', icon: 'assets/images/icons/docker.svg' },
    { name: 'PHP', icon: 'assets/images/icons/php.svg' },
    { name: 'HTML', icon: 'assets/images/icons/html.svg' },
    { name: 'CSS', icon: 'assets/images/icons/css.svg' },
    { name: 'TypeScript', icon: 'assets/images/icons/typescript.svg' },
    { name: 'MySQL', icon: 'assets/images/icons/mysql.svg' },
    { name: 'PostgreSQL', icon: 'assets/images/icons/postgresql.svg' },
    { name: 'Redis', icon: 'assets/images/icons/redis.svg' },
  ];

  scrollLeft() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
