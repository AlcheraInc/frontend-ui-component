import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { ButtonComponent } from "./button/button.component";
import { TableComponent } from "./table/table.component";
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, TableComponent, DatePickerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
