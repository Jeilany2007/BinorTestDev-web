import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultation } from "../Model/Consultation";
import { Observable } from 'rxjs';
import { ConsultationService } from '../consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  
  public consult:Consultation =  new Consultation();//{
  //   id:0,
  //   nom:'',
  //   prenom:'',
  //   dateNaissance:null,
  //   sexe:'',
  //   photo:'',
  //   groupsanguin:'',
  //   poid:0,
  //   taille:0,
  //   observation:''

  // };
  
  constructor(private consultService:ConsultationService) { }

  ngOnInit(): void {
  }
  onSaveConsultation(data:any){
    
    this.consultService.SaveConsultation(this.consultService.host+"/consultations",data)
    .subscribe(res =>{
      this.consult=res;
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
}
