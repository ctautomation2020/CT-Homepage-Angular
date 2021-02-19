import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'home-page-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['../navbar.component.css', './menubar.component.css'],
    animations: [
        trigger('slideDownUp', [
            transition(':enter', [
                style({ height: 0, opacity: 0 }),
                animate(200),
            ]),
            transition(':leave', [
                animate(200, style({ height: 0, opacity: 0 })),
            ]),
        ]),
    ],
})
export class MenubarComponent implements OnInit {
    @Output() closeMenu = new EventEmitter<boolean>();
    @Output() closeLogin = new EventEmitter<boolean>();
    openMenu: string = '';

    menubar: any = [
        {
            name: 'Home',
            path: '',
        },
        {
            name: 'Academics',
            submenu: [
                {
                    name: 'Under Graduate',
                    path: './academics/ug',
                },
                {
                    name: 'Post Graduate',
                    path: './academics/pg',
                },
                {
                    name: 'PhD',
                    path: './academics/phd',
                },
            ],
        },
        {
            name: 'Events',
            path: './events',
        },
        {
            name: 'Infrastructure',
            path: './infrastructure',
        },
        {
            name: 'Student',
            submenu: [
                {
                    name: 'B.E',
                    path: './people/student/be',
                },
                {
                    name: 'M.E',
                    path: './people/student/me',
                },
                {
                    name: 'M.E Part Time',
                    path: './people/student/mept',
                },
            ],
        },
        {
            name: 'Staff',
            submenu: [
                {
                    name: 'Teaching Staff',
                    path: './people/staffs',
                },
                {
                    name: 'Non-Teaching Staff',
                    path: './people/staffs/non-teaching',
                },
            ],
        },
        {
            name: 'Research',
            submenu: [
                {
                    name: 'Research Scholars',
                    path: './people/scholar',
                },
                {
                    name: 'List of Supervisors',
                    path: './research/supervisors',
                },
                {
                    name: 'Thesis',
                    path: './research/thesis',
                },
                {
                    name: 'Publications',
                    path: './research/publications',
                },
                {
                    name: 'Projects',
                    path: './research/projects',
                },
            ],
        },
        {
            name: 'Activites',
            submenu: [
                {
                    name: 'Placements',
                    path: './activities/placements',
                },
                {
                    name: 'Alumni',
                    path: './activities/alumni',
                },
                {
                    name: 'Association',
                    path: './activities/association',
                },
                {
                    name: 'Industry Corner',
                    path: './activities/industry-corner',
                },
            ],
        },
        {
            name: 'Contact',
            path: './contact',
        },
    ];

    constructor(private router: Router) {
        this.router.events.subscribe((route) => {
            if (route instanceof NavigationEnd) {
                this.closeMenuBar();
                this.closeLogin.emit(false);
            }
        });
    }

    toggleMenu(value: any) {
        if (this.openMenu == value) this.openMenu = '';
        else this.openMenu = value;
    }
    ngOnInit(): void {}
    closeMenuBar() {
        this.openMenu = '';
        this.closeMenu.emit(false);
    }
}
