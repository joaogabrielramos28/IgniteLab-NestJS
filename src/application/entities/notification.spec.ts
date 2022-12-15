import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('você recebeu uma solicitação de amizade'),
      recipientId: '123',
      category: 'friendship',
    });
    expect(notification).toBeTruthy();
  });
  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('você')).toThrow();
  });
  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
