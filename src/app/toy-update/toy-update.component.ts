import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToyService} from '../shared/toy/toy.service';
import {GriphyService} from '../shared/griphy/griphy.service';

@Component({
  selector: 'app-toy-update',
  templateUrl: './toy-update.component.html',
  styleUrls: ['./toy-update.component.css']
})
export class ToyUpdateComponent implements OnInit {

  sub: Subscription;
  toy: any = {};
  toy1: any = {};
  toyid: number;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private toyService: ToyService,
    private giphyservice: GriphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['code'];
      this.toyid = id;
      if (this.toyid) {
        this.toyService.get(this.toyid).subscribe((toy: any) => {
        if (toy) {
          this.toy = toy;
          this.giphyservice.get(toy.name).subscribe(x => toy.giphyUrl = x);
        } else {
          console.log('toy that have ${id} as id is not find, returning to toys list');
          this.gotoList();
        }
        });
      }
    });

  }
  gotoList() {
    this.router.navigate(['/toy-list']);
  }




  update(form: NgForm) {
    this.toyService.updateById(form, this.toyid).subscribe(result => {
      this.gotoList();
      }, error => console.error(error)
      );
  }

}
