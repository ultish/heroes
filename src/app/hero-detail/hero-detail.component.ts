import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      // route params are always strings, adding + here converts this to a number
      let id: number = +params['id'];
      this.heroService.getHero(id).then(hero => {
        console.log("HERO!!!", hero);
        this.hero = hero;
      });
    });
  }

  save(): void {
    this.heroService.update(this.hero).then(this.goBack);
  }
  
  goBack(): void {
    window.history.back();
  }

}
