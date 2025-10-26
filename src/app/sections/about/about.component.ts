import { Component } from '@angular/core';
import { SkillIcons } from '../../components/interfaces/skill-icon.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  frontEndIcons: SkillIcons[] = [
    { src: 'assets/images/icons/react.svg', name: 'React' },
    { src: 'assets/images/icons/nextjs.svg', name: 'Next.js' },
    { src: 'assets/images/icons/tailwindcss.svg', name: 'Tailwind' },
    { src: 'assets/images/icons/typescript.svg', name: 'TypeScript' },
    { src: 'assets/images/icons/javascript.svg', name: 'JavaScript' },
    { src: 'assets/images/icons/angular.svg', name: 'Angular' },
  ];
  backEndIcons: SkillIcons[] = [
    { src: 'assets/images/icons/java.svg', name: 'Java' },
    { src: 'assets/images/icons/spring.svg', name: 'Spring' },
    { src: 'assets/images/icons/docker.svg', name: 'Docker' },
    { src: 'assets/images/icons/rabbitmq.svg', name: 'RabbitMQ' },
    { src: 'assets/images/icons/wildfly.svg', name: 'WildFly' },
    { src: 'assets/images/icons/hibernate.svg', name: 'Hibernate' },
  ];

  dataIcons: SkillIcons[] = [
    { src: 'assets/images/icons/postgresql.svg', name: 'PostgreSQL' },
    { src: 'assets/images/icons/mysql.svg', name: 'MySQL' },
    { src: 'assets/images/icons/flyway.svg', name: 'Flyway' },
    { src: 'assets/images/icons/elasticsearch.svg', name: 'Elastic' },
    { src: 'assets/images/icons/redis.svg', name: 'Redis' },
  ];
}
