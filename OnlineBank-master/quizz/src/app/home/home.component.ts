import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
    constructor(private authenticationService: AuthenticationService,
      private router:Router) {
       
    }

    ngOnInit() {
        
    }

    logout(){
      this.authenticationService.logout();
      this.router.navigate(['/icin-bank']);
          

    }

}
