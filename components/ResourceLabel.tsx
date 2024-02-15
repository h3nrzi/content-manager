import { Resourse } from '@/pages/api/resources';

const ResourceLabel = ({ r }: { r: Resourse }) => {
  return (
    <span className={`tag mr-3 is-${r.status === 'اتمام' ? 'success' : 'danger'}`}>{r.status}</span>
  );
};

export default ResourceLabel;
