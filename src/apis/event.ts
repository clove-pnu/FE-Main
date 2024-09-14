import { eventInstance } from './instance';

export function getEventList() {
  return eventInstance.get('');
}
