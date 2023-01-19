import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { OverviewData } from "../models/overview-data";
import { ExpandableTableService } from "./expandable-table.service";
import { MatTableCellDef } from "../models/mat-table-cell-def";

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	public overviewData$: Observable<OverviewData[]> | undefined;
	public displayedColumns: MatTableCellDef[];

	constructor(private expandableTableService: ExpandableTableService) {

		this.displayedColumns = expandableTableService.displayedColumns;
	}

	ngOnInit(): void {
		this.overviewData$ = this.expandableTableService.overviewData$;
	}

	getDisplayedColumns() {
		return this.displayedColumns.map(column => column.matColumnDef);
	}
}
