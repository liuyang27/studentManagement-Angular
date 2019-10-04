import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slist=[];
  constructor(private studentService:StudentService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage(){
    this.studentService.getAllStudents().subscribe((data)=>{
      this.slist=data;
    })
  }



  onDelete(s){
    if(!confirm("Are you sure to delete? ")) {
      return;
    }
    this.studentService.deleteStudentBySid(s.sid).subscribe((data)=>{
      if(data.results==1){
        window.alert("deleted ok");
        this.loadPage();
        
      }else{
        window.alert("error...");
      }
    })  
  }

  onEdit(s){
    this.router.navigate(['/edit',s]);
    //window.location.href="edit";
  }

}
