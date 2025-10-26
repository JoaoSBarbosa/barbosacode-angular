import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    EducationComponent,
    ExperienceComponent,
    TechnologiesComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, CoreModule, ComponentsModule],
  exports: [
    EducationComponent,
    ExperienceComponent,
    TechnologiesComponent,
    ProjectsComponent,
  ],
})
export class SectionsModule {}
