import { MessagesComponent } from './messages.component';
import { MessageService } from '../message.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;

  beforeEach(() => {
    component = new MessagesComponent(new MessageService());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
