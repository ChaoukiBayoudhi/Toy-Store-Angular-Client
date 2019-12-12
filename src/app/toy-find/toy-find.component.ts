import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToyService} from '../shared/toy/toy.service';
import {GriphyService} from '../shared/griphy/griphy.service';
import {Toy} from '../toyClass/toy';

@Component({
  selector: 'app-toy-find',
  templateUrl: './toy-find.component.html',
  styleUrls: ['./toy-find.component.css']
})
export class ToyFindComponent implements OnInit {
  toy: any = {};
  toyRes: Toy = null;
  href: any;
  isShown = false;


  constructor(
    private router: Router,
    private toyService: ToyService, private giphyService: GriphyService) { }

  ngOnInit() {
    // this.toyById();
    // this.id = 0;
    // const id = +this.route.snapshot.paramMap.get('id');
// this.toyService.get(id)
// .subscribe(x => this.toy = x, error => console.error(error)
// );

  }

  toyById() {
    this.toyService.get(this.toy.code).subscribe(data => {
      if (data) {
        this.toyRes = data;
        this.isShown = true;
        this.giphyService.get(this.toyRes.name).subscribe(x => this.toyRes.giphyUrl = x);
      }

    });
  }

  remove() {
    this.toyService.remove(this.toy.code).subscribe(data => {
      this.gotoList();
    });
  }
  gotoList() {
    this.router.navigate(['/toy-list']);
  }


}
