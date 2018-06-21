import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  const mockHeroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
  mockHeroService.getHeroes.and.returnValue([]);

  beforeEach(() => {
    component = new HeroesComponent(mockHeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
