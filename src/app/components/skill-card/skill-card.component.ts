import { Component, Input } from '@angular/core';
import { SkillIcons } from '../interfaces/skill-icon.interface';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icons: SkillIcons[] = [];
}
