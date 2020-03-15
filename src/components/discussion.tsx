import { ItemData } from './Item';

export default function discussion(data: ItemData) {
  if (data.type === 'job') return;
  if (data.comments_count > 0) {
    return `${data.comments_count} comments`;
  }
  return 'discuss';
}