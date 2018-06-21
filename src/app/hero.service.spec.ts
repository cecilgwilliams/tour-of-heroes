import { HeroService } from './hero.service';

describe('HeroService', () => {
  let heroService: HeroService;
  const mockHttpClient = jasmine.createSpyObj('HttpClient', ['get<Hero[]>']);
  const mockMessageService = jasmine.createSpyObj('MessageService', ['add', 'clear']);

  beforeEach(() => { heroService = new HeroService(mockHttpClient, mockMessageService); });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });
});
