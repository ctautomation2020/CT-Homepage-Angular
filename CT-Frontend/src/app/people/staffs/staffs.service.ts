import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StaffsService {

    url:string;
    private non_staffs =  [
        {
            name:"Mr. R. RaviKumar",
            designation:"Superintendent",
            contact:"044-22516319",
            mail:"ravikumarraman75@gmail.com",
            photo:"assets/svg/male.svg"
        },
        {
            name:"Ms. M. Devika",
            designation:"Lab Assistant",
            contact:"044-22516231",
            mail:"mdevika1963@gmail.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Ms. P. Meherunisha",
            designation:"Lab Assistant",
            contact:"044-22516291",
            mail:"rmeherunisha11@gmail.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Mr. S. Gowrisankar",
            designation:"Professional Assistant - I",
            contact:"044-22516283",
            mail:"gowrisankar.it2012@gmail.com",
            photo:"assets/svg/male.svg"
        },
        {
            name:"Ms. N. Swetha",
            designation:"Professional Assistant - I",
            contact:"044-22516217",
            mail:"swetha24narayanan@gmail.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Ms. R. Vanaja",
            designation:"Professional Assistant - II",
            contact:"044-22516289",
            mail:"vanajaramadass@yahoo.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Ms. S. Arpana",
            designation:"Professional Assistant - II",
            contact:"044-22516284",
            mail:"arpana.mit17@gmail.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Ms. M. Durgadevi",
            designation:"Professional Assistant - II",
            contact:"044-22516232",
            mail:"mdurgaranjith@gmail.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Ms. M. Kavitha",
            designation:"Professional Assistant - III",
            contact:"044-22516287",
            mail:"kavimanodivya@gmail.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Ms. K.S. Ezhilisai",
            designation:"Professional Assistant - III",
            contact:"044-22516231",
            mail:"lithika2008@yahoo.in",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Ms. R. Sasikala",
            designation:"Clerical Assistant",
            contact:"044-22516232",
            mail:"sasi.yazhi@gmail.com",
            photo:"assets/svg/female.svg"
        },
        {
            name:"Mr. D. Samuvel",
            designation:"Peon",
            contact:"044-22516233",
            mail:"samu2488@gmail.com",
            photo:"assets/svg/male.svg"
        },
        {
            name:"Mr. T. Vijayaragavan",
            designation:"Peon",
            contact:"044-22516233",
            mail:"vijayaragavant.mit@gmail.com",
            photo:"assets/svg/male.svg"
        },
        {
            name:"Mr. D. Maheswaran",
            designation:"Peon",
            contact:"044-22516233",
            mail:"dmaheswaranm@gmail.com",
            photo:"assets/svg/male.svg"
        }
    ];

    constructor(private http:HttpClient) {
        this.url = "http://localhost:3000/";
    }

    getObject(data:any){
        let res = {};
        data.forEach(( elem: { [x: string]: any; } ) => {
            res[elem["Ref_Code"]] = elem["Ref_Name"];
        });
        return res;
    }
    getStaffDetails(id:any): Observable<any>{
        if(id) return this.http.get(this.url+"staffs/"+id);
        else return this.http.get(this.url+"staffs");
    }
    getNonTeachingStaffs(){
        return this.non_staffs;
    }
}
