import { Component } from '@angular/core';
import { Education } from '../interface/education.interface';
import { EducationData } from '../../data/education.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationList: Education[] = EducationData;
}
