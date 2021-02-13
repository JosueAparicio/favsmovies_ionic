import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  providers: [MoviesService] 
})
export class MovieDetailsPage implements OnInit {

  data: object = null;
  constructor(private moviesService: MoviesService, private arouter: ActivatedRoute) { }

  ngOnInit() {
    const id = this.arouter.snapshot.paramMap.get('id');
    this.moviesService.getMovieDetails(id).subscribe(data =>{
      this.data = data;
      console.log(data);
      
    })
  }

}
