import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  const mockHeroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
  mockHeroService.getHeroes.and.returnValue([]);

  beforeEach(() => {
    component = new HeroSearchComponent(mockHeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
