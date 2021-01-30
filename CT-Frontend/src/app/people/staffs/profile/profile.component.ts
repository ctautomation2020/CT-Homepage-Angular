import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {  Router, ActivatedRoute } from '@angular/router';
import { StaffsService } from '../staffs.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile:any;
    ref_code:any;
    classColor:string[] = ["text-icon-pink","text-icon-blue","text-icon-green"];

    getStaffName(){
        if(this.profile.personal.Prefix_Ref){
            if(this.profile.personal.Last_Name){
                return this.ref_code[this.profile.personal.Prefix_Ref] + " " +this.profile.personal.Last_Name +". " + this.profile.personal.First_Name;
            }
            else return this.ref_code[this.profile.personal.Prefix_Ref] + " " + this.profile.personal.First_Name; 
        }
        else return "";
    }
    getTimePeriod(start:string, end:string){
        if((end !== null && end !== "0000-00-00" && end !== undefined)){
            return new Date(start).getFullYear() + " - " + new Date(end).getFullYear();
        }
        return  new Date(start).getFullYear() + " - Present";
    }
    getActYear(date:string){
        return new Date(date).getFullYear();
    }
    getFund(amount:number){
        return (amount / 100000) + " Lakhs";
    }
    getLink(link:string){
        if(!link) return "";
        return (link.includes("http")) ? link : "https://doi.org/"+link;
    }
    getProjectStaffs(project:any){
        let staffs = [];
        if(project["PI_Name"]) staffs.push(project["PI_Name"]);
        if(project["COI1_Name"]) staffs.push(project["COI1_Name"]);
        if(project["COI2_Name"]) staffs.push(project["COI2_Name"]);
        
        return staffs.join(" , ");
    }
    splitActivity(){
        let activity = {};
        
        for(let act of this.profile["activity"]){
            if(activity[this.ref_code[act["Event_Type_Ref"]]] === undefined){
                activity[this.ref_code[act["Event_Type_Ref"]]] = []; 
            }
            activity[this.ref_code[act["Event_Type_Ref"]]].push(act);
        }

        this.profile["activity"] = activity;
    }
    constructor(
        private titleService:Title, 
        private activatedRoute:ActivatedRoute, 
        private route:Router,
        private staffService:StaffsService) { 
        this.titleService.setTitle("Staff Profile | CT");

        this.activatedRoute.data.subscribe((value)=>{
            this.profile = value["data"];
            if(!this.profile["personal"]){
                this.route.navigate(['error']);
            }

            this.ref_code = this.staffService.getObject(value["ref"]);
            this.splitActivity();
        });

        console.log(this.profile);
    }
    ngOnInit(): void {
        
    }
}
