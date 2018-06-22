import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, convertToParamMap } from '@angular/router';
import { mock, verify, instance, when } from 'ts-mockito';
import { HeroService } from '../hero.service';
import { from, Observable } from 'rxjs';

describe('HeroDetailComponent', () => {
  let heroDetailComponent: HeroDetailComponent;

  const expectedHeroes = [ {'id': 1, 'name': 'Hero 1'}, {'id': 2, 'name': 'Hero 2'}];

  const mockHeroService: HeroService = mock(HeroService);
  when(mockHeroService.getHeroes()).thenReturn(from([expectedHeroes]));

  const mockLocation = jasmine.createSpyObj('Location', ['back']);

  const paramMap: ParamMap = convertToParamMap({id: '3'});
  const mockActivatedRouteSnapshot: ActivatedRouteSnapshot = mock(ActivatedRouteSnapshot);
  when(mockActivatedRouteSnapshot.paramMap).thenReturn(paramMap);
  const mockActivatedRoute: ActivatedRoute = mock(ActivatedRoute);
  when(mockActivatedRoute.snapshot).thenReturn(instance(mockActivatedRouteSnapshot));

  beforeEach(() => {
    heroDetailComponent = new HeroDetailComponent(instance(mockActivatedRoute), instance(mockHeroService), mockLocation);
  });

  it('should create', () => {
    expect(heroDetailComponent).toBeTruthy();
  });
  it('should get hero on init', () => {
    spyOn(heroDetailComponent, 'getHero');
    heroDetailComponent.ngOnInit();
    expect(heroDetailComponent.getHero).toHaveBeenCalled();
  });
  it('should get hero with id in url from hero service', () => {
    const expectedHero = {'id': 3, 'name': 'Hero 3'};
    when(mockHeroService.getHero(3)).thenReturn(from([expectedHero]));
    heroDetailComponent.getHero();
    expect(heroDetailComponent.hero).toEqual(expectedHero);
  });
  it('should call back on location', () => {
    heroDetailComponent.goBack();
    expect(mockLocation.back).toHaveBeenCalled();
  });
  it('should update hero upon save and then go back', () => {
    const hero = {id: 4, name: 'Hero 4'};
    heroDetailComponent.hero = hero;
    when(mockHeroService.updateHero(hero)).thenReturn(new Observable());
    heroDetailComponent.save();
    verify(mockHeroService.updateHero(hero)).called();
    expect(mockLocation.back).toHaveBeenCalled();
  });
});
