import { DashboardComponent } from './dashboard.component';
import { mock, verify, instance, when } from 'ts-mockito';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

describe('DashboardComponent', () => {
  let dashboardComponent: DashboardComponent;
  const mockHeroService: HeroService = mock(HeroService);
  when(mockHeroService.getHeroes()).thenReturn(new Observable());
  const heroService: HeroService = instance(mockHeroService);

  beforeEach(() => {
    dashboardComponent = new DashboardComponent(heroService);
  });

  it('should create', () => {
    expect(dashboardComponent).toBeTruthy();
  });
  it('should get heroes on init', () => {
    dashboardComponent.ngOnInit();
    verify(mockHeroService.getHeroes()).called();
  });
});
