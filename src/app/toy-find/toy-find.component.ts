import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToyService } from '../shared/toy/toy.service';
import { Subscription, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { GriphyService } from '../shared/griphy/griphy.service';

@Component({
  selector: 'app-toy-find',
  templateUrl: './toy-find.component.html',
  styleUrls: ['./toy-find.component.css']
})
export class ToyFindComponent implements OnInit , OnDestroy {
  sub: Subscription;
  toy: any = {};
  xyz: any = {};
  href: any;
  toys: Array<any>;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private toyService: ToyService, private giphyService: GriphyService) { }

  ngOnInit() {
    this.toyByName();
    // this.id = 0;
    // const id = +this.route.snapshot.paramMap.get('id');
// this.toyService.get(id)
// .subscribe(x => this.toy = x, error => console.error(error)
// );

  }

  toyByName() {
    this.toyService.getByName(this.xyz.name).subscribe(data => {
      this.toys = data;
      for (const toy of this.toys) {
        this.giphyService.get(toy.name).subscribe(x => toy.giphyUrl = x);
      }
    });
  }
  gotoList() {
    this.router.navigate(['/toy-list']);
  }


}
