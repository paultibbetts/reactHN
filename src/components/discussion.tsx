import { ItemModel } from '../models/Item';

export default function discussion(data: ItemModel): string {
  if (data.type === 'job') return '';
  if (data.comments_count > 0) {
    return `${data.comments_count} comments`;
  }
  return 'discuss';
}