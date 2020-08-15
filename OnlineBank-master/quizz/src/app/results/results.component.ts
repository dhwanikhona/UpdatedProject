import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Transaction } from '../transaction';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
 private transaction:Transaction;
  constructor(private service:UserService,private router: Router) {
	  this.transaction=new Transaction();
	  
  }
transac(){
	this.service.depotransaction(this.transaction).subscribe(res=>this.gotoHome())


}
withdrawtransac(){
	this.service.withdrawtransaction(this.transaction).subscribe(res=>this.gotoHome())

}
gotoHome(){
   
    this.router.navigate(['/home']);
    this.transaction = new Transaction();
  }
  ngOnInit() {
  
  }
}

