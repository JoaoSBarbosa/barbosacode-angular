import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-base',
  templateUrl: './section-base.component.html',
  styleUrl: './section-base.component.scss',
})
export class SectionBaseComponent {
  @Input() title: string = '';
  @Input({ required: true }) sectionId: string = '';
}
