export default function discussion (data) {
  if (data.type === 'job') return;
    if (data.comments_count > 0) {
      return `${data.comments_count} comment${data.comments_count === 1 ? '' : 's'}`;
    }
  return 'discuss';
}