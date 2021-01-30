import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffsService } from 'src/app/people/staffs/staffs.service';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['../publications.component.css','./publications-list.component.css']
})
export class PublicationsListComponent implements OnInit {

    year:number;
    resolved:boolean;

    ref_code: any;
    publications:any[] = [];
    pg_no:number;

    no_data:string;
    no_data_sub:string;

    constructor(private route:ActivatedRoute, private pubService:PublicationsService, private staffService:StaffsService) {
        this.route.data.subscribe(data => {
            this.publications = data["data"]["result"];
            this.year = data["data"]["year"];
            this.ref_code = this.staffService.getObject(data["ref"]);
            
            this.pubService.start_year = this.year;
            this.resolved = true;
        })
        this.route.queryParams.subscribe(params=>{
            this.year = +params['year'];
            
            if(isNaN(this.year) && !this.resolved){
                this.pubService.getPubList().subscribe(data => {
                    this.publications = data["result"];
                    this.year = data["year"];

                    this.pubService.start_year = this.year;
                });
            }
            else{
                if(!this.resolved){
                    this.pubService.getPubList(this.year).subscribe(data => {
                        this.publications = data["result"];
                    });
                }
                this.resolved = false;
            }

            this.pg_no = 1;

            this.no_data = "Publications are not available - " + this.year;
            this.no_data_sub = "Recent publications will be updated soon";
        })
    }

    getDOI(url:string){
        if(!url) return "";
        if(!url.includes("http")) return "http://doi.org/"+url;
        else return url;
    }
    ngOnInit(): void {
    }
}
