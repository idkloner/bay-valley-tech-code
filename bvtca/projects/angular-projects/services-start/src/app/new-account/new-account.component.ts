import { Component } from '@angular/core';
import { AccountService } from '../account.sercive';

import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountService]
})
export class NewAccountComponent {
  constructor(private logService: LoggingService,
              private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logService.logStatusChange(accountStatus);

    //This technically will work with the 
    //import up top, but is an impropper way 
    //top use services in angular.
    //We do not want to create the instances manually
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);  
    
  }
}
