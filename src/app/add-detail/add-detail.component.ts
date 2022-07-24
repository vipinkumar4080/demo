import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDetail } from './models/add-detail.model';
import { AddDetailService } from './service/add-detail.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
  data:any[]=[];
  addDetail:any=new AddDetail();
  priorityList:any;
  constructor(
    private getServiceDetail:AddDetailService,
    private router:Router
  ) {}

  ngOnInit(): void {
    let tempDAta= localStorage.getItem('arrayList');
    if(tempDAta != null){
      this.data=JSON.parse(tempDAta);
    }
    this.getServiceDetail.getPriorityList().subscribe(res=>{
      this.priorityList=res;
    })
  }
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.addDetail.image_file = reader.result as string;
     
        // this.myForm.patchValue({
        //   fileSource: reader.result
        // });
   
      };
   
    }
  }
  addTaskDetail(){ 
    let result =JSON.stringify(this.addDetail); 
    this.data.push(JSON.parse(result));
    localStorage.setItem('arrayList',JSON.stringify(this.data));
    this.getServiceDetail.addTaskDetail(this.data);
    this.router.navigate(['/home-page']);
  }
}
