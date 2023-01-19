import { Injectable } from '@angular/core';
import { DetailOverviewData, Overview } from "./data";
import { BehaviorSubject } from "rxjs";
import { OverviewData } from "../models/overview-data";
import { DetailData } from "../models/detail-data";
import { MatTableCellDef } from "../models/mat-table-cell-def";

@Injectable({
	providedIn: 'root'
})
export class ExpandableTableService {

	private overviewSubject: BehaviorSubject<OverviewData[]> = new BehaviorSubject<OverviewData[]>(Overview);
	public overviewData$ = this.overviewSubject.asObservable();
	public displayedColumns: MatTableCellDef[] = [
		{
			title: "Line",
			matColumnDef: 'lineName'
		}, {
			title: "Start",
			matColumnDef: 'start'
		}, {
			title: "Destination",
			matColumnDef: 'destination'
		}, {
			title: "Last driven",
			matColumnDef: 'lastDriven'
		}, {
			title: "Valid until",
			matColumnDef: 'validUntil'
		}, {
			title: "Coverage",
			matColumnDef: 'coverage'
		}, {
			title: "Valid coverage",
			matColumnDef: 'validCoverage'
		}, {
			title: "Update",
			matColumnDef: "update"
		}];


	constructor() {
	}

	public getDetailOverviewData(lineId: number): Promise<DetailData[]> {
		console.log("Getting detail data for line: ", lineId);
		return new Promise(resolve => resolve(DetailOverviewData));
	}
}
