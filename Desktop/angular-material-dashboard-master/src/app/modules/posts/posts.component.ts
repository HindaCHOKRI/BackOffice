import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  headers = ["ID", "Name", "Age", "Gender", "Country","Action"];

  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "3",
      "Name" : "Vikram",
      "Age" : "31",
      "Gender" : "Male",
      "Country" : "Australia",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "4",
      "Name" : "Riya",
      "Age" : "20",
      "Gender" : "Female",
      "Country" : "India",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "5",
      "Name" : "John",
      "Age" : "23",
      "Gender" : "Male",
      "Country" : "USA",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "6",
      "Name" : "Raman",
      "Age" : "27",
      "Gender" : "Male",
      "Country" : "India",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "7",
      "Name" : "Mohan",
      "Age" : "39",
      "Gender" : "Male",
      "Country" : "India",
      "Action":"Edit - Delete"
    },
    {
      "ID" : "8",
      "Name" : "Shreya",
      "Age" : "21",
      "Gender" : "Female",
      "Country" : "India",
      "Action":"Edit - Delete"
    }
  ]
  ngOnInit() {
  }

}
