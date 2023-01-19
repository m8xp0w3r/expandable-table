import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "./main.component";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";


@NgModule({
	declarations: [MainComponent],
	exports: [MainComponent],
	imports: [
		CommonModule,
		MatTableModule,
		MatCheckboxModule
	]
})
export class MainModule {
}
