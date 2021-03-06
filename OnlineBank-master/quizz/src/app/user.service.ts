import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Transfer } from './transfer';
import { Transaction } from './transaction';
import { Request } from './request';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url:string;
private getallusersurl:string;
private transferUrl:string;
private depositUrl:string;
private user:User;
private withdrawUrl:string;
private requestUrl:string;
  constructor(private http:HttpClient,private authService: AuthenticationService) { 
    this.url="http://localhost:8080/registration";
    this.getallusersurl = "http://localhost:8080/getallusers";
    this.transferUrl="http://localhost:8080/toSomeoneElse";
    this.depositUrl="http://localhost:8080/deposit";
    this.withdrawUrl = "http://localhost:8080/withdraw";
    this.requestUrl="http://localhost:8080/request";


    
    }




  public adduser(user:User){
    return this.http.post<User>(this.url,user);
  }


  public transfer(transfer:Transfer){
    
    const currentUser = this.authService.currentUserValue;

    console.log(currentUser);

    
    const opts = new HttpParams().set("recipientAccountNumber",transfer.recipientAccountNumber)
                                  .set("transferAmount",transfer.transferAmount)
                                  .set("recipient",transfer.recipient)
                                  .set("username",currentUser.username);

    
    return this.http.post<any>(this.transferUrl,opts);

  }
public depotransaction(transaction:Transaction){
    
    const currentUser = this.authService.currentUserValue;

    console.log(currentUser);

    
    const opts = new HttpParams().set("amount",transaction.depositAmount)
                                  .set("username",currentUser.username);

    
    return this.http.post<any>(this.depositUrl,opts);

  }

public withdrawtransaction(transaction:Transaction){
    
    const currentUser = this.authService.currentUserValue;

    console.log(currentUser);

    
    const opts = new HttpParams().set("amount",transaction.withdrawAmount)
                                  .set("username",currentUser.username);

    
    return this.http.post<any>(this.withdrawUrl,opts);

  }

public requestT(request:Request){
    
    const currentUser = this.authService.currentUserValue;

    console.log(currentUser);

    
    const opts = new HttpParams().set("requestType",request.requestType)
                                  .set("requestDescription",request.requestDes)
                                  .set("username",currentUser.username);


    
    return this.http.post<any>(this.requestUrl,opts);

  }

  getAll(){
    return this.http.get<User[]>(this.getallusersurl);
  }
}
