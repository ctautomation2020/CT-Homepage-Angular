import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {

    labs:any;
    constructor(private titleBar: Title) {
        this.titleBar.setTitle("Infrastructure | CT");
    }
    getLabDetails(){
        let labs = {
            academic:[
                {
                    lab_name:"Grid Lab",
                    lab_image:"assets/img/infrastructure/grid.jpg",
                    processor:"Intel Core i7",
                    hard_disk:"1TB",
                    ram:"8GB",
                    nodes:25,
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum qui natus sit neque repellat tempora ab minima dolor possimus nam assumenda perspiciatis, nemo culpa totam quos perferendis odio corrupti illum sed! Molestias, iure illo, esse facere perferendis dolorum tempora repellat excepturi, dicta omnis ea aperiam at nisi ex quasi."
                },
                {
                    lab_name:"Distributed Computing Lab",
                    lab_image:"assets/img/infrastructure/distributed_comuting.jpg",
                    processor:"Intel Core i7",
                    hard_disk:"1TB",
                    ram:"8GB",
                    nodes:75,
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum qui natus sit neque repellat tempora ab minima dolor possimus nam assumenda perspiciatis, nemo culpa totam quos perferendis odio corrupti illum sed! Molestias, iure illo, esse facere perferendis dolorum tempora repellat excepturi, dicta omnis ea aperiam at nisi ex quasi."
                },
                {
                    lab_name:"Pervasive Computing Lab",
                    lab_image:"assets/img/infrastructure/pervasive_computing.jpg",
                    processor:"Intel Core 2Duo",
                    hard_disk:"500GB",
                    ram:"4GB",
                    nodes:60,
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum qui natus sit neque repellat tempora ab minima dolor possimus nam assumenda perspiciatis, nemo culpa totam quos perferendis odio corrupti illum sed! Molestias, iure illo, esse facere perferendis dolorum tempora repellat excepturi, dicta omnis ea aperiam at nisi ex quasi."
                },
                {
                    lab_name:"High Performance Computing",
                    lab_image:"assets/img/infrastructure/high_performance_lab.jpg",
                    processor:"Intel Core i7",
                    hard_disk:"2TB",
                    ram:"16GB",
                    nodes:25,
                    description:"High Performance Computing refers to effective computing platform and software applications used to solve problems, develop solutions in science, engineering and other real world applications. The HPC lab delivers computing facility for laboratory and project activities carried out by students and researchers. The computers in HPC lab is well equipped with high-end processors,  internet access and software’s for the conduct of laboratory courses."
                },
                {
                    lab_name:"Programming Practice Lab",
                    lab_image:"assets/img/infrastructure/prgramming_practice.jpg",
                    processor:"Intel Core i5",
                    hard_disk:"1TB",
                    ram:"4GB",
                    nodes:75,
                    description:"A breadth wise focus on the programming paradigms and a depth-wise understanding of the logic building and transformation is to be given. The Programming Practices Laboratory is a single point solution to address this necessity. It has a highly reliable computing environment with compilers such as gcc, javac and language tools for application development using scripting languages. Every computer professional emerging out of the DCT will have a root in the Programming Practices Laboratory to remember forever. "
                },
                {
                    lab_name:"Multicore Lab",
                    lab_image:"assets/img/infrastructure/multicore.jpg",
                    processor:"Intel Core i7",
                    hard_disk:"1TB",
                    ram:"16GB",
                    nodes:57,
                    description:"The Multi-core lab provides an elegant environment with multi-core systems for the undergraduate students to carry out their research projects. Applications in various domains like blockchain, networking, and artificial intelligence are carried out. The lab is equipped with GPUs that supports video analytics and machine learning projects that demand intense computational power. The high-end compilers provide a flexible environment to execute programs written in any high-level language."
                },
                {
                    lab_name:"Internet of Things Lab",
                    lab_image:"assets/img/infrastructure/iot.jpg",
                    processor:"Intel Core i7",
                    hard_disk:"2TB",
                    ram:"16GB",
                    nodes:8,
                    description:"With the emergence of Internet of Things(IoT) as a prominent technology in recent years, a separate lab has been set up to carry out experiments/projects related to this field. The basic objective of this laboratory is to establish a learning framework through some well-designed experiments/projects. Students can carry out several projects with different types of sensors, Arduino, NodeMCU, Raspberry Pi etc. which will help them to quickly learn concepts in IoT."
                }
            ],
            research:[
                {
                    lab_name:"Next-Gen Networks Lab",
                    lab_image:"assets/img/infrastructure/next_gener_networks.png",
                    processor:"Intel Core i7",
                    hard_disk:"2TB",
                    ram:"16GB",
                    nodes:7,
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum qui natus sit neque repellat tempora ab minima dolor possimus nam assumenda perspiciatis, nemo culpa totam quos perferendis odio corrupti illum sed! Molestias, iure illo, esse facere perferendis dolorum tempora repellat excepturi, dicta omnis ea aperiam at nisi ex quasi."
                },
                {
                    lab_name:"Data Science Lab",
                    lab_image:"assets/img/infrastructure/data_science.png",
                    processor:"Intel Core i7",
                    hard_disk:"2TB",
                    ram:"16GB",
                    nodes:7,
                    description:"In the Data Science Laboratory, research works on deep data analytics for extracting useful patterns and information from multi-dimensional and multi modal data are carried out. Applications in various domains like medical and health informatics, social network mining, learning analytics and information security are handled here. Research on information security on variety of data including network and surveillance data towards building smart city with computer vision is also carried out. "
                },
                {
                    lab_name:"Big Data Analysis Lab",
                    lab_image:"assets/img/infrastructure/big_data.png",
                    processor:"Intel Core i7",
                    hard_disk:"2TB",
                    ram:"16GB",
                    nodes:7,
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum qui natus sit neque repellat tempora ab minima dolor possimus nam assumenda perspiciatis, nemo culpa totam quos perferendis odio corrupti illum sed! Molestias, iure illo, esse facere perferendis dolorum tempora repellat excepturi, dicta omnis ea aperiam at nisi ex quasi."
                }
            ],
            servers:[
                {
                    server_name:"Dell PowerEdge R540",
                    server_image:"assets/img/infrastructure/Dell-Servers.jpg",
                    processor:"Intel Xeon Silver 4110",
                    hard_disk:"1.2TB",
                    ram:"16GB DDR4",
                    controller:"RAID"
                },
                {
                    server_name:"Dell PowerEdge R540",
                    server_image:"assets/img/infrastructure/dell_server_2.jpg",
                    processor:"Intel Xeon Silver 4216",
                    hard_disk:"1.2TB",
                    ram:"64GB DDR4",
                    controller:"RAID"
                },
                {
                    server_name:"Fujitsu Primer GY RX2540",
                    server_image:"assets/img/infrastructure/fujitsu_server_preview.png",
                    processor:"Intel Xeon PR300D",
                    hard_disk:"2TB",
                    ram:"112GB DDR4",
                    controller:"RAID"
                },
                {
                    server_name:"IBM System x3500 M4",
                    server_image:"assets/img/infrastructure/ibm_server.jpeg",
                    processor:"Intel Xeon Multicore",
                    hard_disk:"1.2TB",
                    ram:"64GB DDR3",
                    controller:"RAID"
                }
            ],
            storages:[
                {
                    server_name:"Fujitsu Eternus - DX200",
                    server_image:"assets/img/infrastructure/fujitsu_storage.jpg",
                    processor:"Intel Xeon",
                    hard_disk:"1.8TB",
                    number:"16",
                    type:"SAN"
                },
                {
                    server_name:"IBM DS 3512",
                    server_image:"assets/img/infrastructure/server_preview.jpg",
                    processor:"Intel Xeon Silver 4110",
                    hard_disk:"2TB",
                    number:"4",
                    type:"SAN"
                }
            ]
        };
        return labs;
    }
    
    ngOnInit(): void {
        this.labs = this.getLabDetails();
    }
}
