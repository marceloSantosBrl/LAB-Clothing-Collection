import { Component, Input } from '@angular/core';
import { IServerData } from '../../models/i-server-data';
import { ServerData } from '../../../utils/classes/server-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public serverData = ServerData;

  @Input('colsName') public colsName!: string[];

  @Input('data') public data!: IServerData;

  @Input('mode') public mode!: string;

  @Input('clickable') public clickable: boolean = false;
}
