import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupervisorsService {

    constructor() { }
    getSupervisors(){
        let supervisors = [
            {
                id:"3048",
                name:"Dr. B. Thanasekhar",
                designation:"Assistant Professor ( Sr. Grade )",
                mail:"vigneshantony5@gmail.com",
                phone:"9940595423",
                image_link:"http://www.ct.mitindia.edu/images/thanasekhar.jpg",
                interests:["Programming Models", "GPU Computing", "Compiler", "Automata Theory"],
                present_scholars:[
                    {
                        name:"Arun Kumar R",
                        image_link:"assets/svg/user.svg",
                        type:"Full Time",
                        admission:"2018"
                    },
                    {
                        name:"Vignesh A",
                        image_link:"assets/svg/user.svg",
                        type:"Part Time",
                        admission:"2020"
                    }
                ],
                past_scholars:[
                    {
                        name:"Ramanujam R",
                        image_link:"assets/svg/user.svg",
                        type:"Part Time",
                        admission:"2018"
                    },
                    {
                        name:"Vignesh A",
                        image_link:"assets/svg/user.svg",
                        type:"Full Time",
                        admission:"2020"
                    }
                ]
            },
            {
                id:"7848",
                name:"Dr. Y. Nancy Jane",
                designation:"Assistant Professor",
                mail:"vigneshantony5@gmail.com",
                phone:"9940595423",
                image_link:"http://www.ct.mitindia.edu/images/MsNancyJane.jpg",
                interests:["Programming Models", "GPU Computing", "Compiler", "Automata Theory"],
                present_scholars:[
                    {
                        name:"Arun Kumar R",
                        image_link:"assets/svg/user.svg",
                        type:"Full Time",
                        admission:"2018"
                    },
                    {
                        name:"Vignesh A",
                        image_link:"assets/svg/user.svg",
                        type:"Part Time",
                        admission:"2020"
                    }
                ],
                past_scholars:[
                    {
                        name:"Ramanujam R",
                        image_link:"assets/svg/user.svg",
                        type:"Part Time",
                        admission:"2018"
                    },
                    {
                        name:"Vignesh A",
                        image_link:"assets/svg/user.svg",
                        type:"Full Time",
                        admission:"2020"
                    }
                ]
            }
        ];
        return supervisors;
    }
}
