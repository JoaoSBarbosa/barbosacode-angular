import { Component } from '@angular/core';
import { ExperienceList } from '../../data/experience.data';
import { Experience } from '../interface/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experienteList: Experience[] = ExperienceList;
}
