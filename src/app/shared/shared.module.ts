import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ColComponent } from './components/col/col.component';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    ColComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, SortPipe, ColComponent]
})
export class SharedModule { }
