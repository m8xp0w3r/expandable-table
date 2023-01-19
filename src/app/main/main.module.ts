import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "./main.component";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ChildTableComponent } from './child-table/child-table.component';


@NgModule({
	declarations: [MainComponent, ChildTableComponent],
	exports: [MainComponent],
	imports: [
		CommonModule,
		MatTableModule,
		MatCheckboxModule,
		MatIconModule,
		MatButtonModule
	]
})
export class MainModule {
}
