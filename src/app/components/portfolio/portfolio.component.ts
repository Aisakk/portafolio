import { Component, OnInit } from '@angular/core';
import {
  trigger,state,
  style,animate,
  transition,query,stagger
} from '@angular/animations';
import {MatDialog} from '@angular/material';
import { AboutComponent } from 'src/app/about/about.component';
import {  FooterComponent } from '../../components/footer/footer.component';
import { OasisComponent } from '../oasis/oasis.component';
import { JmsComponent } from '../jms/jms.component';
import { IntevepComponent } from '../intevep/intevep.component';
import { ConvertComponent } from '../convert/convert.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('entrada',[
      state('void', style({
        transform: 'translateX(-100vh)',
        opacity: 0
      })),
      transition(':enter',[
        animate(3000, style({
          transform: 'translateX(0vh)',
          opacity: 1
        }))
      ])
    ])
  ]
})

export class PortfolioComponent implements OnInit {
  Images = [{
    Banner: 'assets/img/html5.png',
    title:'HTML5',
    clase:'html'
  },
  {
    Banner: 'assets/img/css3.png',
    title:'CSS3',
    clase:'css'
  },
  {
    Banner: 'assets/img/javascript.png',
    title:'JAVASCRIPT',
    clase:'javascript'
  },
  {
    Banner: 'assets/img/bootstrap.png',
    title:'BOOTSTRAP',
    clase:'bootstrap'
  },
  {
    Banner: 'assets/img/materialize.png',
    title:'MATERIALIZE',
    clase:'materialize'
  },
  {
    Banner: 'assets/img/php7.png',
    title:'PHP',
    clase:'php'
  },
  {
    Banner: 'assets/img/mysql.png',
    title:'MYSQL',
    clase:'mysql'
  },
  {
    Banner: 'assets/img/python.png',
    title:'PYTHON',
    clase:'python'
  },
  {
    Banner: 'assets/img/web2py.png',
    title:'WEB2PY',
    clase:'web2py'
  },
  {
    Banner: 'assets/img/reactjs.png',
    title:'REACTJS',
    clase:'reactjs'
  },
];
  Diseño = [{
    imageBanner: 'assets/img/',
    title: '',
    description: ''
  }];

  Desarrollo = [{
    imageBanner: 'assets/img/',
    title: '',
    description: ''
  }];
  constructor(public dialog: MatDialog) { 
  }
  
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(IntevepComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(OasisComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog3(): void {
    const dialogRef = this.dialog.open(JmsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog4(): void {
    const dialogRef = this.dialog.open(ConvertComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
