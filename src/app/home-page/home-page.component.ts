import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AddDetailService } from '../add-detail/service/add-detail.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,AfterViewInit {
  addDetail:any[]=[];
  selectPriority:String='';
  selectedTask:String='';
  columnItemList:any[]=[];
  inProgressList:any[]=[];
  completedList:any[]=[];
  itemData:any[]=[];
  priorityList:any;
  constructor(
    private getServiceDetail:AddDetailService
  ) {
    this.getServiceDetail.getTaskDetail.subscribe(res=>{
      if(res != null){
        this.addDetail=res;       
      }
    })
   }    
  ngOnInit(): void {
    this.getServiceDetail.getPriorityList().subscribe(res=>{
      this.priorityList=res;
    })
    this.getServiceDetail.getColumnList().subscribe(res=>{
      this.columnItemList=res;
    })
  }
  ngAfterViewInit(): void {
    if(this.addDetail.length != 0){
      this.itemData=this.addDetail;
    }   
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.clearData();
  }
  addTodoData(){  
    let res=[];
    res=this.itemData.filter(res=> res.task_title == this.selectedTask );
    if(res.length != 0){
      if(this.selectPriority == 'In Progress'){
        this.inProgressList.push(res[0]);
        this.clearData();
      }else if(this.selectPriority == 'Completed'){
        this.completedList.push(res[0]);
        this.clearData();
      }else{
        this.clearData();
      }
    }
  }
  clearData(){
    this.selectPriority='';
    this.selectedTask='';
    this.displayStyle = "none";
  }
}
