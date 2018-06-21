import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let dataService: InMemoryDataService;
  beforeEach(() => { dataService = new InMemoryDataService(); });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });
});
