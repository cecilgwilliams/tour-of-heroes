import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let dashboardComponent: DashboardComponent;
  const mockHeroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
  mockHeroService.getHeroes.and.returnValue([]);

  beforeEach(() => {
    dashboardComponent = new DashboardComponent(mockHeroService);
  });

  it('should create', () => {
    expect(dashboardComponent).toBeTruthy();
  });
});
