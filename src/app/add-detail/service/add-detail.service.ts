import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AddDetailService{
    constructor(){}
    addPriorityList:any[]=[
        {id:1,value:'average'},
        {id:2,value:'high'},
        {id:3,value:'critical'}
      ]
      columnList:any[]=[
        {id:1,name:'To Do'},
        {id:2,name:'In Progress'},
        {id:3,name:' Completed'}
      ]
    getPriorityList():Observable<any[]>{
        return of(this.addPriorityList);
    }
    getColumnList():Observable<any[]>{
      return of(this.columnList);
    }
    private shareTaskDetail = new BehaviorSubject<any>(null); 
    getTaskDetail = this.shareTaskDetail.asObservable(); 
    addTaskDetail(data:any){this.shareTaskDetail.next(data);}

}