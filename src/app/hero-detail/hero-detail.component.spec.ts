import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';

describe('HeroDetailComponent', () => {
  let heroDetailComponent: HeroDetailComponent;
  const mockHeroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
  mockHeroService.getHeroes.and.returnValue([]);
  const mockLocation = jasmine.createSpyObj('Location', ['back']);

  beforeEach(() => {
    heroDetailComponent = new HeroDetailComponent(new ActivatedRoute(), mockHeroService, mockLocation);
  });

  it('should create', () => {
    expect(heroDetailComponent).toBeTruthy();
  });
});
