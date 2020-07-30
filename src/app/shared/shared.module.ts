import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class SharedModule {}
