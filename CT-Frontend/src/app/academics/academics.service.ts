import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AcademicsService {
    private regulations = {
        ug: [
            {
                regu_type: 'rusa2018',
                title: '2018 Regulation - RUSA',
                description:
                    'This regulation is for the students admitted to the B.E. Programme at the University Departments from the Academic year 2018 - 2019 onwards.',
                link: 'assets/files/academics/ug/rusa2018/rusa2018.pdf',
            },
            {
                regu_type: 'cbcs2015',
                title: '2015 Regulation - CBCS',
                description:
                    'This regulation is for the students admitted to the B.E. Programme at the University Departments from the Academic year 2015 - 2016 onwards.',
                link: 'assets/files/academics/ug/cbcs2015/cbcs2015.pdf',
            },
        ],
        pg: [
            {
                regu_type: '2019',
                title: '2019 Regulation',
                description:
                    'This regulations is for the students admitted to M.E. / M.Tech. (Full-Time, Part Time), M.C.A., M.Sc. (Full Time) (2 Years) Programmes at various University Departments from the Academic year 2019-2020 onwards.',
                link: 'assets/files/academics/pg/2019/2019.pdf',
            },
        ],
        phd: [
            {
                regu_type: '2020',
                title: '2020 Regulation',
                description:
                    'PhD scholars of DCT are exposed to research activities pertaining to which workshops and Faculty Development Programmes are held throughout the year.',
                link: 'assets/files/academics/phd/2020.pdf',
            },
            {
                regu_type: '2015',
                title: '2015 Regulation',
                description:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil consectetur ratione doloremque architecto nobis corporis voluptates neque hic odio quo!',
                link: 'assets/files/academics/phd/2015.pdf',
            },
        ],
    };
    private subjects = {
        ug: {
            rusa2018: {
                sem1: {
                    subjects: [
                        {
                            code: 'HS6151',
                            title: 'Technical English I',
                            credits: { L: 4, T: 0, P: 0, C: 5 },
                        },
                        {
                            code: 'PH6151',
                            title: 'Engineering Physics',
                            credits: { L: 3, T: 0, P: 2, C: 5 },
                        },
                        {
                            code: 'MA6151',
                            title: 'Mathematics I',
                            credits: { L: 3, T: 1, P: 0, C: 5 },
                        },
                        {
                            code: 'CS6101',
                            title: 'Programming with C',
                            credits: { L: 2, T: 1, P: 4, C: 6 },
                        },
                        {
                            code: 'CS6102',
                            title: 'Computational Thinking',
                            credits: { L: 0, T: 0, P: 0, C: 5 },
                        },
                    ],
                },
                sem2: {
                    subjects: [
                        {
                            code: 'HS6251',
                            title: 'Technical English II',
                            credits: { L: 4, T: 0, P: 0, C: 5 },
                        },
                        {
                            code: 'CY6251',
                            title: 'Engineering Chemistry',
                            credits: { L: 3, T: 0, P: 2, C: 5 },
                        },
                        {
                            code: 'MA6251',
                            title: 'Discrete Mathematics',
                            credits: { L: 3, T: 1, P: 0, C: 5 },
                        },
                        {
                            code: 'GE6251',
                            title: 'Engineering Graphics',
                            credits: { L: 2, T: 0, P: 4, C: 5 },
                        },
                        {
                            code: 'CS6103',
                            title: 'Application Development Practices',
                            credits: { L: 1, T: 0, P: 4, C: 4 },
                        },
                    ],
                },
                sem3: {
                    addon: [
                        {
                            code: 'oe',
                            title: 'Open Elective I',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                    ],
                    subjects: [
                        {
                            code: 'CS61041',
                            title: 'Data Structures and Algorithms',
                            credits: { L: 3, T: 1, P: 4, C: 7 },
                        },
                        {
                            code: 'CS6105',
                            title:
                                'Digital Fundamentals and Computer Organization',
                            credits: { L: 3, T: 1, P: 4, C: 7 },
                        },
                        {
                            code: 'MA6351',
                            title: 'Probability and Statistics',
                            credits: { L: 3, T: 1, P: 0, C: 5 },
                        },
                        {
                            code: 'EE6351',
                            title:
                                'Basics of Electrical and Electronics Engineering',
                            credits: { L: 4, T: 0, P: 4, C: 7 },
                        },
                    ],
                },
                sem4: {
                    addon: [
                        {
                            code: 'msc',
                            title: 'Mathematical Soft Core I',
                            credits: { L: 3, T: '1/0', P: '0/4', C: '5/6' },
                        },
                        {
                            code: 'oe2',
                            title: 'Open Elective II',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                    ],
                    subjects: [
                        {
                            code: 'CS6106',
                            title: 'Database Management Systems',
                            credits: { L: 3, T: 0, P: 4, C: 6 },
                        },
                        {
                            code: 'CS6107',
                            title: 'Computer Architecture',
                            credits: { L: 3, T: 0, P: 2, C: 5 },
                        },
                        {
                            code: 'CS6108',
                            title: 'Operating Systems',
                            credits: { L: 3, T: 0, P: 4, C: 6 },
                        },
                    ],
                },
                sem5: {
                    addon: [
                        {
                            code: 'msc',
                            title: 'Mathematical Soft Core II',
                            credits: { L: 3, P: '0/4', T: '1/0', C: '5/6' },
                        },
                        {
                            title: 'Professional Soft Core I',
                            code: 'psc',
                            credits: { L: 3, P: '0/4', T: 0, C: '4/6' },
                        },
                    ],
                    subjects: [
                        {
                            title: 'Compiler Design',
                            code: 'CS6109',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                        {
                            title: 'Object Oriented Analysis and Design',
                            code: 'CS6110',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                        {
                            title: 'Computer Networks',
                            code: 'CS6111',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                    ],
                },
                sem6: {
                    addon: [
                        {
                            title: 'Professional Soft Core II',
                            code: 'psc',
                            credits: { L: 3, P: '0/4', T: 0, C: '4/6' },
                        },
                        {
                            title: 'Professional Soft Core III',
                            code: 'psc',
                            credits: { L: 3, P: '0/4', T: 0, C: '4/6' },
                        },
                        {
                            title: 'Professional Soft Core IV',
                            code: 'psc',
                            credits: { L: 3, P: '0/4', T: 0, C: '4/6' },
                        },
                        {
                            title: 'Professional Elective I',
                            code: 'pe',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                            track: 'track1',
                        },
                    ],
                    subjects: [
                        {
                            title: 'Creative and Innovative Project',
                            code: 'CS6611',
                            credits: { L: 0, P: 4, T: 0, C: 3 },
                        },
                    ],
                },
                sem7: {
                    addon: [
                        {
                            title: 'Professional Elective II',
                            code: 'pe',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                            track: 'track1',
                        },
                        {
                            title: 'Professional Elective III',
                            code: 'pe',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                            track: 'track1',
                        },
                        {
                            title: 'Professional Elective IV',
                            code: 'pe',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                            track: 'track1',
                        },
                        {
                            title: 'Professional Elective V',
                            code: 'pe',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                            track: 'track1',
                        },
                    ],
                },
                sem8: {
                    addon: [
                        {
                            title: 'Professional Elective VI',
                            code: 'pe',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                            track: 'track6',
                        },
                        {
                            title: 'Professional Elective VII',
                            code: 'pe',
                            track: 'track7',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                    ],
                    subjects: [
                        {
                            title: 'Project Work',
                            code: '',
                            credits: { L: 0, P: 12, T: 0, C: 9 },
                            no_link: true,
                        },
                    ],
                },
                msc: {
                    subjects: [
                        {
                            title: 'Linear Algerbra',
                            code: 'MA6201',
                            credits: { L: 3, P: 0, T: 1, C: 5 },
                        },
                        {
                            title: 'Graph Theory',
                            code: 'CS6201',
                            credits: { L: 3, P: 0, T: 1, C: 5 },
                        },
                        {
                            title: 'Signals and Systems',
                            code: 'EC6201',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                        {
                            title: 'Theory of Computation',
                            code: 'CS6202',
                            credits: { L: 3, P: 0, T: 1, C: 5 },
                        },
                    ],
                },
                psc: {
                    subjects: [
                        {
                            title: 'Machine Learning',
                            code: 'CS6301',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                        {
                            title: 'Programming Paradigms',
                            code: 'CS6302',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Distributed Systems',
                            code: 'CS6303',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Software Engineering',
                            code: 'CS6304',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Microprocessors',
                            code: 'CS6305',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                        {
                            title: 'Parallel Programming',
                            code: 'CS6306',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                        {
                            title: 'Advanced Algorithms',
                            code: 'CS6307',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                        {
                            title: 'Java Programming',
                            code: 'CS6308',
                            credits: { L: 3, P: 4, T: 0, C: 6 },
                        },
                    ],
                },
                pe: {
                    addon: [
                        {
                            title: 'Professional Elective I',
                            code: 'pe',
                            track: 'track1',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Professional Elective II',
                            code: 'pe',
                            track: 'track2',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Professional Elective III',
                            code: 'pe',
                            track: 'track3',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Professional Elective IV',
                            code: 'pe',
                            track: 'track4',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Professional Elective V',
                            code: 'pe',
                            track: 'track5',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Professional Elective VI',
                            code: 'pe',
                            track: 'track6',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                        {
                            title: 'Professional Elective VII',
                            code: 'pe',
                            track: 'track7',
                            credits: { L: 3, P: 0, T: 0, C: 4 },
                        },
                    ],
                    track1: [
                        {
                            title: 'Data Mining',
                            code: 'CS6001',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Soft Computing',
                            code: 'CS6002',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Big Data Analytics',
                            code: 'CS6003',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Information Visualisation',
                            code: 'CS6004',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Deep Learning Techniques',
                            code: 'CS6005',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                    ],
                    track2: [
                        {
                            title: 'Cloud Computing',
                            code: 'CS6006',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Information Security',
                            code: 'CS6007',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Cryptography and Network Security',
                            code: 'CS6008',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Mobile Networks',
                            code: 'CS6009',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Wireless and Sensor Networks',
                            code: 'CS6010',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                    ],
                    track3: [
                        {
                            title: 'GPU Computing',
                            code: 'CS6011',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Embedded Systems',
                            code: 'CS6012',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Unix Internals',
                            code: 'CS6013',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'IoT and Smart Appliances',
                            code: 'CS6014',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Multicore Architectures',
                            code: 'CS6015',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                    ],
                    track4: [
                        {
                            title: 'Graphics and Multimedia',
                            code: 'CS6016',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Human Computer Interaction',
                            code: 'CS6017',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Image Processing',
                            code: 'CS6018',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Augmented Reality and Virtual Reality',
                            code: 'CS6019',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Digital Signal Processing',
                            code: 'CS6020',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                    ],
                    track5: [
                        {
                            title: 'Software Testing and Quality Assurance',
                            code: 'CS6021',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Software Project Management',
                            code: 'CS6022',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Software Test Automation',
                            code: 'CS6023',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Test Driven Development',
                            code: 'CS6024',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Supply Chain Management',
                            code: 'CS6025',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                    ],
                    track6: [
                        {
                            title: 'Game Development',
                            code: 'CS6026',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Modelling and Simulation',
                            code: 'CS6027',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title:
                                'Queuing Theory and Performance Evaluation of Computer Systems',
                            code: 'CS6028',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Social Network Analysis',
                            code: 'CS6029',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                        {
                            title: 'Natural Language Processing',
                            code: 'CS6030',
                            credits: { L: 3, T: 0, P: 0, EL: 3, C: 4 },
                        },
                    ],
                    track7: [
                        {
                            title: 'Database Tuning',
                            code: 'CS6031',
                            credits: { L: 2, T: 0, P: 0, EL: 3, C: 3 },
                        },
                        {
                            title: 'Software Defined Networks',
                            code: 'CS6032',
                            credits: { L: 2, T: 0, P: 0, EL: 3, C: 3 },
                        },
                        {
                            title: 'Storage Area Networks',
                            code: 'CS6033',
                            credits: { L: 2, T: 0, P: 0, EL: 3, C: 3 },
                        },
                        {
                            title: 'Service Oriented Architecture',
                            code: 'CS6034',
                            credits: { L: 2, T: 0, P: 0, EL: 3, C: 3 },
                        },
                        {
                            title: 'Entreprenuership Development',
                            code: 'CS6035',
                            credits: { L: 2, T: 0, P: 0, EL: 3, C: 3 },
                        },
                    ],
                },
                oe: {
                    subjects: [],
                },
            },
        },
        pg: {
            '2019': {
                sem1: {
                    subjects: [
                        {
                            code: 'MA5153',
                            title:
                                'Advanced Mathematics for Scientific Computing',
                            credits: { L: 3, T: 1, P: 0, C: 4 },
                        },
                        {
                            code: 'CP5151',
                            title: 'Data Structures and Algorithms',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5152',
                            title: 'Multi Core Architectures',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5153',
                            title: 'Networking Technologies',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'RM5151',
                            title: 'Research Methodology and IPR',
                            credits: { L: 2, T: 0, P: 0, C: 2 },
                        },
                        {
                            code: 'CP5161',
                            title: 'Data Structures and Algorithms Laboratory',
                            credits: { L: 0, T: 0, P: 4, C: 2 },
                        },
                        {
                            code: 'CP5111',
                            title: 'Networking Laboratory',
                            credits: { L: 0, T: 0, P: 4, C: 2 },
                        },
                    ],
                },
                sem2: {
                    subjects: [
                        {
                            code: 'CP5251',
                            title: 'Advanced Operating Systems',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5252',
                            title: 'Compiler Optimization Techniques',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5253',
                            title: 'Machine Learning',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5261',
                            title: 'Machine Learning Techniques Laboratory',
                            credits: { L: 0, T: 0, P: 4, C: 2 },
                        },
                        {
                            code: 'CP5262',
                            title: 'Professional Practices',
                            credits: { L: 2, T: 0, P: 0, C: 2 },
                        },
                    ],
                },
                sem3: {
                    addon: [
                        {
                            title: 'Professional Elective III',
                            code: 'pec',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            title: 'Professional Elective IV',
                            code: 'pec',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            title: 'Professional Elective V',
                            code: 'pec',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            title: 'Open Elective',
                            code: 'oec',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                    ],
                    subjects: [
                        {
                            title: 'Dissertation I',
                            code: 'CP5311',
                            credits: { L: 0, T: 0, P: 12, C: 6 },
                            no_link: true,
                        },
                    ],
                },
                sem4: {
                    subjects: [
                        {
                            title: 'Dissertation II',
                            code: 'CP5411',
                            credits: { L: 0, T: 0, P: 24, C: 12 },
                            no_link: true,
                        },
                    ],
                },
                pec: {
                    subjects: [
                        {
                            code: 'CP5090',
                            title: 'Advanced Database Technology and Design',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5073',
                            title: 'Cloud Computing Technologies',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5080',
                            title: 'Ethical Hacking',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5079',
                            title: 'Digital Image and Video Processing',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5085',
                            title: 'Principles of Cryptography',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5083',
                            title: 'Internet of Things',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5072',
                            title: 'Advanced Software Engineering',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'IF5076',
                            title: 'Deep Learning',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5089',
                            title: 'Web Content Design and Management',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'IF5090',
                            title: 'Semantic Web',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'IF5088',
                            title: 'Mobile Application Development',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5075',
                            title: 'Cryptocurrency and Blockchain Technologies',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'SE5071',
                            title: 'Multimedia Systems and Applications',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5082',
                            title: 'Information Retrieval Techniques',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'BD5151',
                            title: 'Big Data Mining and Analytics',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5084',
                            title: 'Parallel Algorithms',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5076',
                            title: 'Cyber Security',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5087',
                            title: 'Soft Computing',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5081',
                            title: 'Game Theory',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5071',
                            title: 'Adhoc and Wireless Sensor Networks',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'SE5075',
                            title: 'Software Security',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5074',
                            title: 'Cognitive Science',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5001',
                            title: 'Virtualization Techniques',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5078',
                            title: 'Database Administration and Tuning',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5077',
                            title:
                                'Data Warehousing and Data Mining Techniques',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'CP5086',
                            title: 'Social Network Analysis',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'SE5076',
                            title: 'Software Testing and Quality Assurance',
                            credits: { L: 3, T: 0, P: 2, C: 4 },
                        },
                        {
                            code: 'CP5088',
                            title: 'User Interface Design',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'SE5074',
                            title: 'Software Reliability Metrics and Models',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                    ],
                },
                oec: {
                    subjects: [
                        {
                            code: 'OE5091',
                            title: 'Business Data Analytics',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'OE5092',
                            title: 'Industrial Safety',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'OE5093',
                            title: 'Operations Research',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'OE5094',
                            title: 'Cost Management of Engineering Projects',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'OE5095',
                            title: 'Composite Materials',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                        {
                            code: 'OE5096',
                            title: 'Waste to Energy',
                            credits: { L: 3, T: 0, P: 0, C: 3 },
                        },
                    ],
                },
                ac: {
                    subjects: [],
                },
            },
        },
    };
    private supervisors = [
        {
            name: 'Dr. R. Gunasekaran',
            designation: 'Professor and Head',
            image: 'assets/img/staffs/hod.jpg',
            mail: 'gunasekaran@mitindia.edu',
            link: 'people/staffs/profile/66392',
        },
        {
            name: 'Dr. P. Jayashree',
            designation: 'Associate Professor',
            image: 'assets/img/staffs/Dr.P.Jayashree.jpg',
            mail: 'pjshree@annauniv.edu',
            link: 'people/staffs/profile/60623',
        },
        {
            name: 'Dr. P. Varalakshmi',
            designation: 'Associate Professor',
            image: 'assets/img/staffs/DrPVaralakshmi.jpg',
            mail: 'varanip@annauniv.edu',
            link: 'people/staffs/profile/66517',
        },
        {
            name: 'Dr. C. Valliyammai',
            designation: 'Associate Professor',
            image: 'assets/img/staffs/valliyammaiC.jpg',
            mail: 'cva@annauniv.edu',
            link: 'people/staffs/profile/60779',
        },
        {
            name: 'Dr. Ponsy R.K. Sathia Bhama',
            designation: 'Associate Professor',
            image: 'assets/img/staffs/ponsy.jpg',
            mail: 'ponsy@mitindia.edu',
            link: 'people/staffs/profile/66449',
        },
        {
            name: 'Dr. B. Thanasekhar',
            designation: 'Assistant Professor (Sl. Gr)',
            image: 'assets/img/staffs/thanasekhar.jpg',
            mail: 'thanasekhar@mitindia.edu',
            link: 'people/staffs/profile/66269',
        },
        {
            name: 'Dr. Y. Nancy Jane',
            designation: 'Assistant Professor',
            image: 'assets/img/staffs/MsNancyJane.jpg',
            mail: 'nancyjaney@mitindia.edu',
            link: 'people/staffs/profile/67079',
        },
        {
            name: 'Dr. P. Pabitha',
            designation: 'Assistant Professor',
            image: 'assets/img/staffs/pabitha.jpg',
            mail: 'pabithap@gmail.com',
            link: 'people/staffs/profile/67507',
        },
        {
            name: 'Dr. S. Muthuraj Kumar',
            designation: 'Assistant Professor',
            image: 'assets/img/staffs/S.Muthurajkumar.jpg',
            mail: 'muthuraj@annauniv.edu',
            link: 'people/staffs/profile/69520',
        },
    ];
    constructor() {}
    getSemesters(acadType: string, type: string, count: number) {
        if (!this.subjects[acadType][type]) return [];

        let sems = [];
        let extras = ['msc', 'psc', 'pe', 'pec', 'oec'];

        for (let sem = 1; sem <= count; sem++) {
            sems.push({ code: 'sem' + sem, title: 'Semester ' + sem });
        }

        if (this.subjects[acadType] && this.subjects[acadType][type]) {
            for (let extra of extras) {
                if (this.subjects[acadType][type][extra])
                    sems.push({ code: extra, title: extra.toUpperCase() });
            }
        }

        return sems;
    }
    getRegulations(acadType: string) {
        return this.regulations[acadType];
    }
    getSubjects(acadType: string, sem: string, regu: string) {
        return this.subjects[acadType][regu]
            ? this.subjects[acadType][regu][sem].subjects
            : [];
    }
    getElectiveSubjectsList(acadType: string, regu: string, sem: string) {
        return this.subjects[acadType][regu][sem].addon;
    }
    isElectiveAvailable(acadType: string, sem: string, regu: string) {
        return this.subjects[acadType][regu][sem].addon ? true : false;
    }
    getElectives(acadType: string, regu: string, type: string, track: string) {
        if (track) return this.subjects[acadType][regu][type][track];
        return this.subjects[acadType][regu][type].subjects;
    }
    getCurrPath(acadType: string, regu: string) {
        return 'assets/files/academics/' + acadType + '/' + regu + '/';
    }
    getPath(acadType: string, regu: string, sem: string) {
        return this.getCurrPath(acadType, regu) + sem + '/';
    }
    getSupervisorList() {
        return this.supervisors;
    }
}
