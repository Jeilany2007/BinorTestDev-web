import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultation } from "../Model/Consultation";
import { Observable } from 'rxjs';
import { ConsultationService } from '../consultation.service';
import { Router } from '@angular/router';

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
  
  constructor(private consultService:ConsultationService,private router:Router) { }

  ngOnInit(): void {
  }
  onSaveConsultation(data:any){
    
    this.consultService.SaveConsultation(this.consultService.host+"/consultation",data)
    .subscribe(res =>{
      this.consult=res;
      console.log(res);
      this.router.navigateByUrl("/consultation");
    },err=>{
      console.log(err);
    })
  }
}
