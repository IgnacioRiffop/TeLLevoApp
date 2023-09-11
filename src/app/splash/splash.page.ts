import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements AfterViewInit {
  @ViewChild('titulo') titulo!: ElementRef;

  constructor(
    private router: Router, private aniCtrl: AnimationController
  ) { }
  ngAfterViewInit(): void {
    const ani = this.aniCtrl.create()
    .addElement(this.titulo.nativeElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');
    ani.play();
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },5000);
  }

}
