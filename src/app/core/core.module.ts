import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StructureComponent } from './structure/structure.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HeroComponent } from './modules/hero/hero.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    StructureComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  exports: [
    StructureComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HeroComponent,
  ],
})
export class CoreModule {}
