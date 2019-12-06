import { ToyService } from './../shared/toy/toy.service';
import { Component, OnInit } from '@angular/core';
import { GriphyService } from './../shared/griphy/griphy.service';
import { Toy } from '../toyClass/toy';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent implements OnInit {
toys: Array<Toy>;
toy: any = {};
  constructor(private toyService: ToyService, private giphyService: GriphyService) { }
   ngOnInit() {
     this.toyService.getAll().subscribe(data => {
       this.toys = data;
       for (const toy of this.toys) {
         this.giphyService.get(toy.name).subscribe(x => toy.giphyUrl = x);
       }
     });
  }

}
