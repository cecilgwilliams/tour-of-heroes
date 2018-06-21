import { MessageService } from './message.service';

describe('MessageService', () => {
  let messageService: MessageService;
  beforeEach(() => { messageService = new MessageService(); });

  it('should be created', () => {
    expect(messageService).toBeTruthy();
  });
});
