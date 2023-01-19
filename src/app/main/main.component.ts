import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { OverviewData } from "../models/overview-data";
import { ExpandableTableService } from "./expandable-table.service";
import { MatTableCellDef } from "../models/mat-table-cell-def";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	public overviewData$: Observable<OverviewData[]> | undefined;
	public displayedColumns: MatTableCellDef[];
	selection = new SelectionModel<OverviewData>(true, []);

	constructor(private expandableTableService: ExpandableTableService) {

		this.displayedColumns = expandableTableService.displayedColumns;
	}

	ngOnInit(): void {
		this.overviewData$ = this.expandableTableService.overviewData$;
	}

	getDisplayedColumns() {
		const columns = this.displayedColumns.map(column => column.matColumnDef);
		columns.push("select");
		return columns;
	}

	masterToggle() {

	}
}
