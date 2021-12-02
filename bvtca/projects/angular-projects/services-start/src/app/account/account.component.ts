import { Component,  Input,} from '@angular/core';
import { AccountService } from '../account.sercive';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private logService: LoggingService,
              private accountsService: AccountService){}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    this.logService.logStatusChange(status);
  }
}
