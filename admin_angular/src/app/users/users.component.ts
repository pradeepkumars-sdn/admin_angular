import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   
  constructor(private service : AdminService) { }
  usersData:any
  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.service.getUserList().subscribe(data =>{
      console.log("printing resp", data)
      if(data){
        this.usersData = data;

        console.log("checking data", this.usersData)
      }

    })
  }

}
