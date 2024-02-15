import { Resourse } from '@/pages/api/resources';
import Link from 'next/link';
import ResourceLabel from './ResourceLabel';
import moment from 'jalali-moment';

interface Props {
  resources: Resourse[];
}

const ResourceHighlight = ({ resources }: Props) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((r) => (
            <section className="section" key={r.id}>
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(r.createdAt, 'YYYY/MM/DD').locale('fa').format('LL')}
                      {r.status === 'غیرفعال' ? null : <ResourceLabel r={r} />}
                    </h2>
                    <h1 className="title">{r.title}</h1>
                    <p>{r.description}</p>
                    <Link href={`/resources/${r.id}`} legacyBehavior>
                      <a className="button is-light is-link">جزئیات</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
