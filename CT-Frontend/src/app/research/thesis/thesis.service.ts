import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThesisService {

    current_year:number = (new Date()).getFullYear();
    private thesis = {
        2020:[
            {
                title:"Detection and Mitigation of DDoS Attack in SDN using Machine Learning Model",
                authors:"Vignesh A, Kugan S, Arunsha R",
                supervisor:"Dr. S. Muthuraj Kumar",
                domain:"Cloud Computing, Edge Computing"
            },
            {
                title:"Radio Frequency Identification Device for Tamil Nadu Uniform Services Recruitment Board",
                authors:"Dr.S.Thamarai Selvi",
                supervisor:"Dr.S.Thamarai Selvi",
                domain:"Cloud Computing, Edge Computing"
            }
        ],
        2019:[
            {
                title:"Radio Frequency Identification Device for Tamil Nadu Uniform Services Recruitment Board",
                authors:"Dr.S.Thamarai Selvi",
                supervisor:"Dr.S.Thamarai Selvi",
                domain:"Cloud Computing, Edge Computing"
            }
        ]
    };
    constructor() { }
    getLatestThesisYear(){
        let keys = Object.keys(this.thesis);
        return +keys[keys.length - 1];
    }
    getThesis(year:number){
        return (this.thesis[year]) ? (this.thesis[year]) : [];    
    }
}
