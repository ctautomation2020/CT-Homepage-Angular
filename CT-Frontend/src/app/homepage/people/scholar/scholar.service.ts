import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScholarService {

    current_year:number = (new Date()).getFullYear();
    private scholars = {
        2020:[
            {
                name:"Anusha Jayasimhan",
                email:"anusha.jai@gmail.com",
                phone:"044-22516230",
                year:2020,
                image:"assets/img/scholars/Anusha-Jayasimhan.jpg",
                supervisor:{
                    name:"Dr. P. Pabitha",
                    link:""
                },
                domain:"Deep Learning, Big Data Analytics",
                project_title:"Distributed deep learning analytics using Big data",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"K. Nivitha",
                email:"nivithavimal@gmail.com",
                phone:"044-22516230",
                year:2020,
                image:"assets/img/scholars/nivitha-k.jpg",
                supervisor:{
                    name:"Dr. P. Pabitha",
                    link:""
                },
                domain:"Cloud Computing",
                project_title:"Measuring Uncertainity in Cloud Environment using Machine Learning Techniques",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            }
        ],
        2019:[
            {
                name:"P. Saranya",
                email:"psaranya.cse@gmail.com",
                phone:"044-22516230",
                year:2019,
                image:"assets/img/scholars/Saranya-P.jpg",
                supervisor:{
                    name:"Dr. P. Jayashree",
                    link:""
                },
                domain:"Software Defined Networks",
                project_title:"Security Enhancement Framework for Software Defined Networks",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"A. Anantha Babu",
                email:"ananth5005@gmail.com",
                phone:"044-22516230",
                year:2019,
                image:"assets/img/scholars/anandababu.jpg",
                supervisor:{
                    name:"Dr. Ponsy R. K. Sathia Bhama",
                    link:""
                },
                domain:"Post Quantum Cryptography",
                project_title:"To construct the Secure Public Key Cryptosystem using Post Quantum Cryptography",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"G. Puviarasi",
                email:"puviarasig@gmail.com",
                phone:"044-22516230",
                year:2019,
                image:"assets/img/scholars/Puviarasi-gowrinathan.jpg",
                supervisor:{
                    name:"Dr. C. Valliyammai",
                    link:""
                },
                domain:"Semantic Web",
                project_title:"Devising semantic model for  Relational Database Co-operative query answering, checking and optimization",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            }
        ],
        2018:[
            {
                name:"R. Arun Kumar",
                email:"runa988@gmail.com",
                phone:"044-22516230",
                year:2018,
                image:"assets/img/scholars/runasing.jpg",
                supervisor:{
                    name:"Dr. B. Thanasekhar",
                    link:""
                },
                domain:"Networking",
                project_title:"Mobility support in indoor LiFi/WiFi system",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"M. Amsa Prabhaa",
                email:"mownimanoj@gmail.com",
                phone:"044-22516230",
                year:2018,
                image:"assets/img/scholars/Amsa-Prabhaa.png",
                supervisor:{
                    name:"Dr. Y. Nancy Jane",
                    link:""
                },
                domain:"Image Processing",
                project_title:"A Spatio-Temporal Knowledge Mining Approach for Predictive Analysis",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"K. Narmadha",
                email:"narmk27@gmail.com",
                phone:"044-22516230",
                year:2018,
                image:"assets/img/scholars/Narmadha-k.jpg",
                supervisor:{
                    name:"Dr. P. Varalakshmi",
                    link:""
                },
                domain:"Security and Privacy",
                project_title:"Privacy in Machine Learning",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"K. Laila",
                email:"lailagodson1@gmail.com",
                phone:"044-22516230",
                year:2018,
                image:"assets/img/scholars/Laila-godson.jpg",
                supervisor:{
                    name:"Dr. P. Jayashree",
                    link:""
                },
                domain:"Big Data",
                project_title:"Spam Review Classification based on Social behaviour analysis",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"J. Saranya Devi",
                email:"saran12.arc@gmail.com",
                phone:"044-22516230",
                year:2018,
                image:"assets/img/scholars/Saranya-Devi.jpg",
                supervisor:{
                    name:"Dr. Y. Nancy Jane",
                    link:""
                },
                domain:"Data Mining",
                project_title:"Multivariate Time Series Data Classification using Temporal Data Mining Approach",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            }
        ],
        2017:[
            {
                name:"B. Sahaya Beni Prathiba",
                email:"sahayabeni@gmail.com",
                phone:"044-22516230",
                year:2017,
                image:"assets/img/scholars/Sahaya-Beni-Prathiba.jpg",
                supervisor:{
                    name:"Dr. R. Gunasekaran",
                    link:""
                },
                domain:"Internet of Vehicles",
                project_title:"Energy-Efficient Learning Mechanism for Load Balancing in Software-Defined Next Generation Networks",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"V. Brindha",
                email:"brindhamaha@gmail.com",
                phone:"044-22516230",
                year:2017,
                image:"assets/img/scholars/brindha-maha.jpg",
                supervisor:{
                    name:"Dr. P. Jayashree",
                    link:""
                },
                domain:"Medical Image Processing",
                project_title:"Diagnostic Support System to Detect Brain Abnormalities",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            }
        ],
        2016:[
            {
                name:"A. Arunkumar",
                email:"Albert.arun97@gmail.com",
                phone:"044-22516230",
                year:2016,
                image:"assets/img/scholars/Arunkumar-A.jpeg",
                supervisor:{
                    name:"Dr. R. Gunasekaran",
                    link:""
                },
                domain:"NFV Cloud and Virtualization",
                project_title:"Efficient VNF On-boarding on Cloud Native Environments",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            },
            {
                name:"R. Naga Priyadarsini",
                email:"darsini17@gmail.com",
                phone:"044-22516230",
                year:2016,
                image:"assets/img/scholars/Naga-Priyadarsini-R.jpg",
                supervisor:{
                    name:"Dr. Ponsy R. K. Sathia Bhama",
                    link:""
                },
                domain:"Medical Blockchain",
                project_title:"Cognitive Blockchain Technology for Predictive Healthcare Management System",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            }
        ],
        2015:[
            {
                name:"E. Nirmala",
                email:"nirmalalochan@gmail.com",
                phone:"044-22516230",
                year:2015,
                image:"assets/img/scholars/suresh-muraliappan.jpg",
                supervisor:{
                    name:"Dr. S. Muthuraj Kumar",
                    link:""
                },
                domain:"Medical Blockchain",
                project_title:"Implementation of Security Aspects of the Cloud Computing Architecture for Social Remote Tracking Solutions",
                publications:[
                    {
                        title:"",
                        link:""
                    }
                ]
            }
        ]
    };
    constructor() { }
    getAllScholars(){
        let scholars = [];
        let keys = Object.keys(this.scholars);
        
        for(let key of keys) {
            let sch_year = this.scholars[key];
            for(let sch of sch_year) scholars.push(sch);
        }
        return scholars;
    }
    getScholars(year:number){
        return (this.scholars[year]) ? this.scholars[year] : [];
    }
}
