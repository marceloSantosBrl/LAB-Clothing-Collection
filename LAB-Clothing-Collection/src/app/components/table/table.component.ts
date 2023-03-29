import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { IServerData } from '../../models/i-server-data';
import { ServerData } from '../../../utils/classes/server-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public serverData = ServerData;

  protected readonly String = String;

  @Input('colsName') public colsName!: string[];

  @Input('caption') public caption = '';

  @Input('data') public data!: IServerData;

  @Input('mode') public mode!: string;

  @Output('clickRow') public clickRow = new EventEmitter<string>();
}
