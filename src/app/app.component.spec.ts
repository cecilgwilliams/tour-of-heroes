import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(() => { app = new AppComponent(); });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  it(`should have as title 'app'`, () => {
    expect(app.title).toEqual('app');
  });
});
