import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { OverviewData } from "../models/overview-data";
import { ExpandableTableService } from "./expandable-table.service";
import { MatTableCellDef } from "../models/mat-table-cell-def";
import { SelectionModel } from "@angular/cdk/collections";
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({height: '0px', minHeight: '0'})),
			state('expanded', style({height: '*'})),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	]
})
export class MainComponent implements OnInit {

	public overviewData$: Observable<OverviewData[]> | undefined;
	public displayedColumns: MatTableCellDef[];
	public expandedElements: boolean[] = [];
	selection = new SelectionModel<OverviewData>(true, []);

	constructor(private expandableTableService: ExpandableTableService) {
		this.displayedColumns = expandableTableService.displayedColumns;
	}

	ngOnInit(): void {
		this.overviewData$ = this.expandableTableService.overviewData$;
	}

	getDisplayedColumns() {
		return ["expand", ...this.displayedColumns.map(column => column.matColumnDef)];
	}

	onExpand(row: OverviewData) {
		this.expandedElements[row.lineId] =  !this.expandedElements[row.lineId];
	}

	expandElement(element: OverviewData) {
		this.expandedElements[element.lineId] = !this.expandedElements[element.lineId];
	}

}
