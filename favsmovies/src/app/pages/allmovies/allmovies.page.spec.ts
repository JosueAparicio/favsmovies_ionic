import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllmoviesPage } from './allmovies.page';

describe('AllmoviesPage', () => {
  let component: AllmoviesPage;
  let fixture: ComponentFixture<AllmoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmoviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllmoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
