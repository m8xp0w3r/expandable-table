import { Component, Input, OnInit } from '@angular/core';
import { OverviewData } from "../../models/overview-data";
import { ExpandableTableService } from "../expandable-table.service";
import { DetailData } from "../../models/detail-data";
import { MatTableCellDef } from "../../models/mat-table-cell-def";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
	selector: 'app-child-table',
	templateUrl: './child-table.component.html',
	styleUrls: ['./child-table.component.scss']
})
export class ChildTableComponent implements OnInit {
	@Input() lineId: number|undefined;
	public detailData$: Promise<DetailData[]> | undefined;
	public displayedColumns: MatTableCellDef[];
	selection = new SelectionModel<OverviewData>(true, []);

	constructor(private expandableTableService: ExpandableTableService) {
		this.displayedColumns = expandableTableService.displayedDetailColumns;
	}

	ngOnInit(): void {
		console.log("on init", this.lineId);
		this.detailData$ = this.expandableTableService.getDetailOverviewData();
	}

	getDisplayedColumns() {
		return this.displayedColumns.map(column => column.matColumnDef);
	}
}
