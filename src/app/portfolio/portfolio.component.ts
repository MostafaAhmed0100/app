import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  images:User[] =[
    {imgSrc:'./assets/image/port1.png' ,altImg:'./assets/image/port1.png'},

    {imgSrc:'./assets/image/port2.png' , altImg:'./assets/image/port2.png'},

    {imgSrc:'./assets/image/port3.png'  ,altImg:'./assets/image/port3.png'},
    {imgSrc:'./assets/image/port1.png'  ,altImg:'./assets/image/port1.png'},

    {imgSrc:'./assets/image/port2.png'  , altImg:'./assets/image/port2.png'},

    {imgSrc:'./assets/image/port3.png'  , altImg:'./assets/image/port3.png'},
  ]


  

hideElement(): void {
  const element = document.getElementById('ss');

  element?.classList.remove('d-none')
  



}




hideElement_1(eventInfo:any): void {
 const x:any = eventInfo.target.getAttribute('src');
 
const hambozo:any =document.getElementById('ww');


 hambozo.style.backgroundImage=`url(${x})`;


 
 



}




hideElement_2(): void {
   const element = document.getElementById('ss');


 
  element?.classList.add('d-none');



}

 
}


