import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../../../Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sidBool:boolean=false;
  private student = new Student();

  constructor(private route:ActivatedRoute,private studentService:StudentService) { }
  @ViewChild('studentForm',{static:false}) studentForm:any;
  ngOnInit() {
    this.route.params.subscribe((d)=>{
      this.student.sid=parseInt(d.sid);
      this.student.name=d.name;
      this.student.age=parseInt(d.age);
      this.student.gender=d.gender;
    })
  }

  
  onSubmit(){
    console.log(this.student);
    this.studentService.editStudent(this.student).subscribe(data=>{
      if(data.results==1){
        alert("edit ok.");
        window.location.href="";
      }else{
        alert("error..");
      }
    })
  
  }


}
