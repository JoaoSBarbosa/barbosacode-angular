import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './structure/structure.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ContactComponent } from './modules/contact/contact.component';

@NgModule({
  declarations: [
    StructureComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [CommonModule],
  exports: [
    StructureComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
  ],
})
export class CoreModule {}
