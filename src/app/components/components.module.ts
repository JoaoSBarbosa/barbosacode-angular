import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBaseComponent } from './section-base/section-base.component';
import { SkillCardComponent } from './skill-card/skill-card.component';

@NgModule({
  declarations: [SectionBaseComponent, SkillCardComponent],
  imports: [CommonModule],
  exports: [SectionBaseComponent, SkillCardComponent],
})
export class ComponentsModule {}
