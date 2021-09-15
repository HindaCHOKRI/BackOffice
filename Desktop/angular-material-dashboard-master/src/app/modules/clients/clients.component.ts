import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


  headers = ["ID", "Name", "Description", "image","Action"];

  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Description" : "21",
      "image" : "Male",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Description" : "25",
      "image" : "Male",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "3",
      "Name" : "Vikram",
      "Description" : "31",
      "image" : "Male",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "4",
      "Name" : "Riya",
      "Description" : "20",
      "image" : "Female",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "5",
      "Name" : "John",
      "Description" : "23",
      "image" : "Male",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "6",
      "Name" : "Raman",
      "Description" : "27",
      "image" : "Male",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "7",
      "Name" : "Mohan",
      "Description" : "39",
      "image" : "Male",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "8",
      "Name" : "Shreya",
      "Description" : "21",
      "image" : "Female",
      "Action":"Edit - Delete"
    }
  ]

  ngOnInit() {
  }

}
