import { DashboardComponent } from './dashboard.component';
import { mock, verify, instance, when } from 'ts-mockito';
import { HeroService } from '../hero.service';
import { from } from 'rxjs';

describe('DashboardComponent', () => {
  let dashboardComponent: DashboardComponent;

  const expectedHeroes = [ {'id': 1, 'name': 'Hero 1'}, {'id': 2, 'name': 'Hero 2'}];
  const mockHeroService: HeroService = mock(HeroService);
  when(mockHeroService.getHeroes()).thenReturn(from([expectedHeroes]));
  const heroService: HeroService = instance(mockHeroService);

  beforeEach(() => {
    dashboardComponent = new DashboardComponent(heroService);
  });

  it('should create', () => {
    expect(dashboardComponent).toBeTruthy();
  });
  it('should call get heroes on init', () => {
    spyOn(dashboardComponent, 'getHeroes');
    dashboardComponent.ngOnInit();
    expect(dashboardComponent.getHeroes).toHaveBeenCalled();
  });
  it('should get all heroes from hero service', () => {
    dashboardComponent.getHeroes();
    verify(mockHeroService.getHeroes()).called();
    expect(dashboardComponent.heroes).toBe(expectedHeroes);
  });

});
