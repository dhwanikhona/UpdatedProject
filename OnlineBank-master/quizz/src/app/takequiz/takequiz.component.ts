import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Request } from '../request';
import { Router } from '@angular/router';
@Component({
  selector: 'app-takequiz',
  templateUrl: './takequiz.component.html',
  styleUrls: ['./takequiz.component.css']
})
export class TakequizComponent implements OnInit {
  private request:Request;

  constructor(private service:UserService,private router: Router) { 
  this.request=new Request();
	}
  
  sendReq(){
    this.service.requestT(this.request).subscribe(res=>this.gotoHome());
  }

  gotoHome(){
   
    this.router.navigate(['/home']);
    this.request = new Request();
  }
  ngOnInit() {
  
  }
  
}
