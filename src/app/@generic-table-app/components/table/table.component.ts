import {
	Component,
	OnInit,
	AfterViewInit,
	ViewChild,
	Injectable,
	Inject
} from '@angular/core';
import {
	GenericTableComponent,
	GtConfig,
	GtCustomComponent,
	GtRow
} from '@angular-generic-table/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { scan, take } from 'rxjs/operators';

export interface Row extends GtRow {
	estatus: string,
	folio: string,
	fechaSolic: string;
	tipo: string;
	contrato: string;
	numCliente: string;
	plazo: string;
	monto: string;
	tasa: string;
	autorizadores: string;
	fechaAutori: string;
	autorizador: string;
	fechaLibera: string;
	sirh: string;
	observaciones: string;
}

export interface StateDictionary {
	[index: string]: any;
}

export function deepCopy(dictionary: StateDictionary) {
	const newDictionary: StateDictionary = {};
	Object.keys(dictionary).forEach(key => {
		newDictionary[key] = {};
		Object.keys(dictionary[key]).forEach(prop => {
			newDictionary[key][prop] = dictionary[key][prop];
		});
	});
	return newDictionary;
}

export type UpdateFunction = (dictionary: StateDictionary) => StateDictionary;

@Injectable()
export class StateService {
	private updates: Subject<UpdateFunction>;
	private _states: BehaviorSubject<StateDictionary>;

	get states(): Observable<StateDictionary> {
		return this._states.asObservable();
	}

	constructor() {
		this.updates = new Subject<UpdateFunction>();
		this._states = new BehaviorSubject<StateDictionary>({});
		this.updates.pipe(
			scan((previousState, apply: UpdateFunction) => apply(previousState), {})
		)
			// .do(dictionary => console.log(`State = ${JSON.stringify(dictionary, null, 2)}`))
			.subscribe(this._states);
	}

	value(rowId: string, property: string, value: any) {
		this.updates.next(dictionary => {
			const newDictionary = deepCopy(dictionary);
			if (!newDictionary[rowId]) {
				newDictionary[rowId] = {};
			}
			newDictionary[rowId][property] = value;
			return newDictionary;
		});
	}
}

@Injectable()
export class EditService {
	private _rowIds = new Subject<string>();
	private _validations: {
		[rowId: string]: { [property: string]: boolean };
	} = {};
	public genericTable: GenericTableComponent<any, any>;

	get ids(): Observable<string> {
		return this._rowIds.asObservable();
	}

	public setValidation(rowId: string, property: string, isValid: boolean) {
		const validationsForRow = this._validations[rowId];
		if (!validationsForRow) {
			this._validations[rowId] = {};
		}
		this._validations[rowId][property] = isValid;
	}

	public isValid(rowId: string) {
		const validationsForRow = this._validations[rowId];
		if (!validationsForRow) {
			return true;
		}
		for (const prop in validationsForRow) {
			if (validationsForRow.hasOwnProperty(prop)) {
				if (validationsForRow[prop] === false) {
					return false;
				}
			}
		}
		return true;
	}

	toggleEditMode(rowId: string) {
		this._rowIds.next(rowId);
	}
}

@Component({
	template: `
    <input type="checkbox" [checked]="selected" />
  `
})
export class SelectedCheckboxComponent extends GtCustomComponent<GtRow> {
	constructor(
		@Inject(GenericTableComponent)
		private table: GenericTableComponent<any, any>
	) {
		super();
	}

	get selected(): boolean {
		return this.table.isRowSelected(this.row);
	}
}

@Component({
	template: ''
})
abstract class CustomColumnComponentBase extends GtCustomComponent<Row>
	implements OnInit {
	public edit: Observable<boolean>;
	public view: Observable<boolean>;
	protected editModeActive = false;

	get isValid(): boolean {
		return true;
	}

	get rowId(): string {
		return (<GtRow>this.row).$$gtRowId;
	}

	constructor(protected editService: EditService) {
		super();
	}

	ngOnInit() {
		/* const source = this.editService.ids.pipe
			.startWith(this.rowId)
			.filter(id => id === this.rowId);
		this.edit = source.scan(prev => !prev, true);
		this.view = source.scan(prev => !prev, false);
		this.edit.subscribe(e => (this.editModeActive = e)); */
	}
}


@Component({
	template: `
    <button class="btn btn-sm btn-outline-danger" (click)=click($event);><i class="far fa-trash-alt"></i></button>
  `,
	styles: [
		`
  .btn.btn-sm {
      padding-top: 0.15rem;
      padding-bottom: 0.15rem;
  }`
	]
})
export class DeleteDiscardButtonComponent extends CustomColumnComponentBase {
	constructor(editService: EditService) {
		super(editService);
	}

	public click(event: Event) {
		if (this.editModeActive) {
			console.log(`discard row ${JSON.stringify(this.row)}`);
			this.editService.toggleEditMode(this.rowId);
		} else {
			console.log(`remove row ${JSON.stringify(this.row)}`);
			this.editService.genericTable.removeRow(<GtRow>this.row);
		}
		event.stopPropagation();
	}
}

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	providers: [EditService, StateService]
})
export class TableComponent implements AfterViewInit {
	public data: Array<Row> = [];
	public configObject: GtConfig<Row>;

	private modalRef: NgbModalRef;

	@ViewChild('newItemForm') addItemForm: NgForm;

	@ViewChild(GenericTableComponent)
	private myTable: GenericTableComponent<any, any>;

	ngAfterViewInit() {
		this.editService.genericTable = this.myTable;
	}

	public deleteSelectedRows() {
		for (let i = this.myTable.selectedRows.length - 1; i >= 0; i--) {
			console.log(`remove row ${JSON.stringify(this.myTable.selectedRows[i])}`);
			this.myTable.removeRow(this.myTable.selectedRows[i]);
		}
	}

	addNew(content) {
		this.modalRef = this.modalService.open(content);
		this.modalRef.result.then(
			result => {
				console.log(`Closed with: ${result}`);
			},
			reason => {
				console.log(`Dismissed ${reason}`);
			}
		);
	}

	onSubmit(newItemForm: NgForm) {
		const newItem: Row = {
			estatus: newItemForm.value.estatus,
			folio: newItemForm.value.folio,
			fechaSolic: newItemForm.value.fechaSolic,
			tipo: newItemForm.value.tipo,
			contrato: newItemForm.value.contrato,
			numCliente: newItemForm.value.numCliente,
			plazo: newItemForm.value.plazo,
			monto: newItemForm.value.monto,
			tasa: newItemForm.value.tasa,
			autorizadores: newItemForm.value.autorizadores,
			fechaAutori: newItemForm.value.fechaAutori,
			fechaLibera: newItemForm.value.fechaLibera,
			autorizador: newItemForm.value.autorizador,
			sirh: newItemForm.value.sirh,
			observaciones: newItemForm.value.observaciones,

		};
		console.log(`adding item  ${JSON.stringify(newItem)}`);
		this.configObject.data.push(newItem);
		this.myTable.redraw();
		this.modalRef.close();
	}

	constructor(
		private editService: EditService,
		private modalService: NgbModal
	) {
		this.configObject = {
			settings: [
				{
					objectKey: 'estatus',
					sort: 'desc'
				},
				{
					objectKey: 'folio'
				},
				{
					objectKey: 'fechaSolic'
				},
				{
					objectKey: 'tipo'
				},
				{
					objectKey: 'contrato'
				},
				{
					objectKey: 'numCliente'
				},
				{
					objectKey: 'plazo'
				},
				{
					objectKey: 'tasa'
				},
				{
					objectKey: 'autorizadores'
				},
				{
					objectKey: 'fechaAutori'
				},
				{
					objectKey: 'fechaLibera'
				},
				{
					objectKey: 'cancelacion',
					sort: 'disable',
					search: false
				},
				{
					objectKey: 'sirh'
				},
				{
					objectKey: 'observaciones'
				},
				
			],
			fields: [
				{
					name: 'Estatus',
					objectKey: 'estatus'
				},
				{
					name: 'Folio',
					objectKey: 'folio',
				},
				{
					name: 'Fecha.Solic',
					objectKey: 'fechaSolic',
					stackedHeading: 'Custom heading',

				},
				{
					name: 'Tipo',
					objectKey: 'tipo',
				},
				{
					name: 'Contrato',
					objectKey: 'contrato',
				},
				{
					name: 'Num.Cte',
					objectKey: 'numCliente',
				},
				{
					name: 'Plazo',
					objectKey: 'plazo',
				},
				{
					name: 'Tasa',
					objectKey: 'tasa',
				},
				{
					name: 'Autorizadores', 
					objectKey: 'autorizadores',
				},
				{
					name: 'Fecha autori',
					objectKey: 'fechaAutori',
				},
				{
					name: 'Fecha Libera',
					objectKey: 'fechaLibera',
				},
				{
					name: 'Cancelación',
					columnClass: 'gt-button',
					objectKey: 'cancelacion',
					value: () => '',
					columnComponent: {
						type: DeleteDiscardButtonComponent
					}
				},
				{
					name: 'SIRH',
					objectKey: 'sirh',
				},
				{
					name: 'Observaciones',
					objectKey: 'observaciones',
				},
			],
			data: [
				{
					estatus: 'cancelado',
					folio: '676576',
					fechaSolic: '08-27-20',
					tipo: 'RETEN7986',
					contrato: '7868756876',
					numCliente: '555',
					plazo: '67',
					monto: '$100,476,786',
					tasa: '4.08',
					autorizadores: 'ATTT|7878',
					fechaAutori: '09-09-21',
					autorizador: '0',
					fechaLibera: '2021-09-07',
					sirh: 'uuuu',
					observaciones: 'No hay',
				},
			]
		};
	}
}