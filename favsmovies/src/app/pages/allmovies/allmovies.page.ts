import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.page.html',
  styleUrls: ['./allmovies.page.scss'],
  providers: [MoviesService]
})
export class AllmoviesPage implements OnInit {

  result: Observable<any> = null;
  term: string = '';
  type: string = '';
  total: number = 0;

  constructor(private moviesService: MoviesService, private menu: MenuController) { }

  ngOnInit() {
    
  }

 


  searchChanged(){
    //console.log(this.type);
    
    this.result = this.moviesService.searchMovies(this.term, this.type);
   this.result.subscribe(movies =>{
     if (movies) {
      this.total = movies.length;
     }else{
       this.total = 0;
     }
      //console.log(this.total);
      
   })
  }


}
