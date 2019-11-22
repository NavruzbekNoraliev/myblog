import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules';

@NgModule({
  declarations: [
  ],
  exports: [
    MaterialModule,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: []
})
export class SharedModule { }
