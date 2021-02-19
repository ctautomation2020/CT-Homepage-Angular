import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

    private events = {
        2019: {
            "sttpos19":{
                title:"Five-Day STTP on Operating Systems",
                type:"Workshop",
                start_date:"03.12.2019",
                end_date:"07.12.2019",
                brief_note:"The objective of this STTP is to give a broad exposure to Faculty members for handling the course CS8493 - Operating Systems in AICTE approved institutions affiliated to Anna University, Chennai.",
                description:"The objective of this STTP is to give a broad exposure to Faculty members for handling the course CS8493 - Operating Systems in AICTE approved institutions affiliated to Anna University, Chennai.",
                coordinators:["Dr. C. Valliyammai", "Dr. S. Muthuraj Kumar"],
                link:"/events/details/2019/sttpos19",
                brochure_link:"assets/files/events/sttpos19/sttpos19.pdf",
                images:[
                    "assets/files/events/sttpos19/images/ev-back1.jpg",
                    "assets/files/events/sttpos19/images/ev-back2.jpg",
                    "assets/files/events/sttpos19/images/ev-back3.jpg"
                ]
            },
            "icoac":{
                start_date:"15.12.2019",
                end_date:"17.12.2019",
                year:2019,
                type:"ICoAC",
                title:"12th ICoAC organized by DCT - MIT",
                brief_note:"ICoAC is an international conference in the field of Computer Science and Communication, focusing to address issues and developments in advanced computing",
                link:"/events/icoac/2019",
                images:[
                    "assets/files/events/fdtp2020/images/034.JPG",
                    "assets/img/conference.jpg",
                    "assets/img/events/ev-back2.jpg",
                    "assets/files/events/fdtp2020/images/034.JPG",
                    "assets/files/events/fdtp2020/images/034.JPG",
                    "assets/img/academics.jpg",
                    "assets/img/events/ev-back3.jpg",
                    "assets/img/project-back.jpg"
                ]
            }
        },
        2018: {
            "fdtpcd18":{
                title:"Two week FDTP on Compiler Design",
                type:"Workshop",
                start_date:"19.11.2018",
                end_date:"01.12.2018",
                brief_note:"This programme is intended to all faculty members who would also wish to pursue research in Compilers, Code optimization and Design of various recognizers",
                description:"This Faculty Development Training Programme is intended to provide opportunity for teachers employed in Institutions affiliated to Anna University to start handling this course with utmost confidence and also for upgrading their knowledge in the areas of Compilers. This programme is intended to all faculty members who would also wish to pursue research in Compilers, Code optimization and Design of various recognizers",
                coordinators:["Dr. B. Thanasekhar"],
                link:"/events/details/2018/fdtpcd18",
                brochure_link:"assets/files/events/fdtpcd18/file.pdf",
                images:[
                    "assets/files/events/fdtpcd18/images/003.JPG",
                    "assets/files/events/fdtpcd18/images/026.JPG",
                    "assets/files/events/fdtpcd18/images/034.JPG",
                    "assets/files/events/fdtpcd18/images/026.JPG"
                ]
            },
        },
        2017: {
            "fdtpca17":{
                title:"Seven Days FDTP on Computer Architecture",
                type:"Workshop",
                start_date:"15.05.2017",
                end_date:"21.07.2017",
                brief_note:" This programme gives a deep insight into Computer Architecture. It will give a wide exposure to the basic structure and operation of digital computer, arithmetic operations, concept of pipelining, parallelism, memory and I/O systems.",
                description:"This FDTP is intended to provide opportunity for teachers who are working in AICTE approved Institutions affiliated to Anna University. This programme gives a deep insight into Computer Architecture. It will give a wide exposure to the basic structure and operation of digital computer, arithmetic operations, logical unit and implementation of fixed point and floating point operations, concept of pipelining, parallelism, memory and I/O systems.",
                coordinators:["Dr. S. Neelavathy Pari", "Dr. S. Muthuraj Kumar"],
                link:"/events/details/2017/fdtpca17",
                brochure_link:"assets/files/events/fdtpca17/fdtpca17.pdf",
                images:[ ]
            }
        },
        2016: {
            "fdtpdaa16":{
                title:"Seven Days FDTP on Design and Analysis of Algorithms",
                type:"Workshop",
                start_date:"23.11.2016",
                end_date:"23.11.2016",
                brief_note:"This programme gives a deep insight into Analysis of algorithms. It will give a wide exposure to the mathematical analysis of recursive and non-recursive algos, covers solving problems like TSP, knapsack, sorting, searching using various methodologies.",
                description:"This Faculty Development Training Programme is intended to provide opportunity for teachers who are working in AICTE approved Institutions affiliated to Anna University. This programme gives a deep insight into Analysis of algorithms. It will give a wide exposure to the mathematical analysis of recursive and non-recursive algorithms, covers solving problems like TSP, knapsack, sorting, searching, Hamiltonian circuit, n-queens using various methodologies.",
                coordinators:["Dr. P. Pabitha", "Dr. S. Muthuraj Kumar"],
                link:"/events/details/2016/fdtpdaa16",
                brochure_link:"assets/files/events/fdtpdaa16/fdtpdaa16.pdf",
                images:[ ]
            }
        }
    }

    constructor() { 
    }
    current_year:number = new Date().getFullYear();
    getEvents(limit: number = 0, year: number = this.current_year){
        let keys = this.events[year];
        let events:any[] = [];
        
        if(!keys) return [];
        for(let key of Object.values(keys)) events.push(key);
        return (limit) ? events.slice(0,limit) : events;
    }
    getLatestEvents(limit:number){
        let keys = Object.keys(this.events);
        let last_key = +keys[keys.length-1];
        return {year: last_key, data: this.getEvents(limit,last_key)};
    }
    getSpecificEvent(year:number, key:any){
        return (this.events[year]) ? ((this.events[year][key]) ? this.events[year][key] : {}) : {};
    }
}
