import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { mock, verify, anything, instance, when, anyOfClass } from 'ts-mockito';
import { from, Observable } from 'rxjs';

describe('HeroesComponent', () => {
  let heroesComponent: HeroesComponent;

  const expectedHeroes = [ {'id': 1, 'name': 'Hero 1'}, {'id': 2, 'name': 'Hero 2'}];
  const mockHeroService: HeroService = mock(HeroService);
  when(mockHeroService.getHeroes()).thenReturn(from([expectedHeroes]));

  beforeEach(() => {
    heroesComponent = new HeroesComponent(instance(mockHeroService));
  });

  it('should create', () => {
    expect(heroesComponent).toBeTruthy();
  });
  it('should get heros on init', () => {
    spyOn(heroesComponent, 'getHeroes');
    heroesComponent.ngOnInit();
    expect(heroesComponent.getHeroes).toHaveBeenCalled();
  });
  it('should get all heroes from hero service', () => {
    heroesComponent.getHeroes();
    verify(mockHeroService.getHeroes()).called();
    expect(heroesComponent.heroes).toBe(expectedHeroes);
  });
  it('should not add a new hero with invalid name', () => {
    heroesComponent.getHeroes();
    expect(heroesComponent.heroes.length).toBe(2);
    heroesComponent.add('');
    verify(mockHeroService.addHero(anything())).never();
    expect(heroesComponent.heroes.length).toBe(2);
  });
  it('should add a new hero with valid name', () => {
    const expectedHero = {id: 3, name: 'Test Hero'};
    when(mockHeroService.addHero(anything())).thenReturn(from([expectedHero]));
    heroesComponent.getHeroes();
    expect(heroesComponent.heroes.length).toBe(2);
    heroesComponent.add('Test Hero');
    verify(mockHeroService.addHero(anything())).called();
    expect(heroesComponent.heroes.length).toBe(3);
  });
  it('should remove hero', () => {
    when(mockHeroService.deleteHero(anything())).thenReturn(new Observable());
    heroesComponent.getHeroes();
    const heroes = heroesComponent.heroes;
    const hero = heroes[2];
    expect(heroesComponent.heroes.length).toBe(3);
    heroesComponent.delete(hero);
    verify(mockHeroService.deleteHero(hero)).called();
    expect(heroesComponent.heroes.length).toBe(2);
  });

});
