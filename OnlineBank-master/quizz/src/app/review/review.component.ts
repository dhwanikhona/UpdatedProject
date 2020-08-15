import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Transfer } from '../transfer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

private transfer:Transfer;
  constructor(private service:UserService,private router: Router) { 
    this.transfer=new Transfer();

  }
  transferamt(){
    this.service.transfer(this.transfer).subscribe(res=>this.gotoHome())
  }

  gotoHome(){
   
    this.router.navigate(['/home']);
    this.transfer = new Transfer();
  }
  ngOnInit() {
  

  }

}
