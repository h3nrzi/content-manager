import { Resourse } from '@/pages/api/resources';
import Link from 'next/link';
import ResourceLabel from './ResourceLabel';
import moment from 'jalali-moment';

interface Props {
  resources: Resourse[];
}

const ResourceList = ({ resources }: Props) => {
  const renderResources = () =>
    resources.map((r) => (
      <div className="column is-5 is-offset-1 " key={r.id}>
        <div className="content is-medium">
          <h2 className="subtitle is-5 has-text-grey">
            {moment(r.createdAt, 'YYYY/MM/DD').locale('fa').format('LL')}
            {r.status === 'غیرفعال' ? null : <ResourceLabel r={r} />}
          </h2>
          <h1 className="title has-text-black is-3">{r.title}</h1>
          <p className="has-text-dark">{r.description}</p>
          <Link href={`/resources/${r.id}`} legacyBehavior>
            <a className="button is-light is-link">جزئیات</a>
          </Link>
        </div>
      </div>
    ));

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">{renderResources()}</div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
