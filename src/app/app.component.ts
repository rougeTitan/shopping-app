import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService
  ) {}
  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
  /*logic to determin which feature to display either recipe or 
  shopping list*/
  
  //no required since we are using routes instead of conditional directives to 
  //render the right componenets
  // loadedFeature ='recipe';

  // onNavigate(feature:string){
  //   this.loadedFeature=feature;
  // }


}
