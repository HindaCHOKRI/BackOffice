import { OffreToCreate } from 'src/app/modules/_interfaces/offreToCreate.model';
import { Offre } from 'src/app/modules/_interfaces/offre.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  public isCreate: boolean;
  public Name: string;
  public Description: string;
  public offre: OffreToCreate;
  public offres: Offre[] = [];
  public response: {dbPath: ''};

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.isCreate = true;
  }

  public onCreate = () => {
    this.offre = {
      Name: this.Name,
      Description: this.Description,
      Image: this.response.dbPath
    }

    this.http.post('http://localhost:5000/api/offres', this.offre)
    .subscribe(res => {
      this.getOffres();
      this.isCreate = false;
    });
  }

  private getOffres = () => { //GetOffres
    this.http.get('http://localhost:5000/api/offres')
    .subscribe(res => {
      this.offres = res as Offre[];
    });
  }

  public returnToCreate = () => {
    this.isCreate = true;
    this.Name = '';
    this.Description = '';
  }

  public uploadFinished = (event) => {
    this.response = event;
  }

  public createImage = (serverPath: string) => {
    return `http://localhost:5000/${serverPath}`;
  }

}
