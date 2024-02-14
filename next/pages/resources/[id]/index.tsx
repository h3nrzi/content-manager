import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Resourse } from '@/pages/api/resources';
import axios from 'axios';

const ResourceDetail = ({ resource }: { resource: Resourse }) => {
  const router = useRouter();

  const activateResource = async () => {
    axios
      .patch('/api/resources', { ...resource, status: 'فعال' })
      .then(() => {
        alert('منبع فعال شد');
        router.reload();
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  <h2 className="subtitle is-4">{resource.createdAt}</h2>
                  <h1 className="title">{resource.title}</h1>
                  <p>{resource.description}</p>
                  <p>
                    زمان اتمام:
                    {resource.timeToFinish}
                    دقیقه
                  </p>
                  <Link href={`/resources/${resource.id}/edit`} legacyBehavior>
                    <a className="button is-warning">ویرایش کردن</a>
                  </Link>
                  <button className="button is-success mr-2" onClick={activateResource}>
                    فعال کردن
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const dataRes = await fetch('http://localhost:3001/api/resources/' + params?.id);
  const data: Resourse[] = await dataRes.json();

  return {
    props: {
      resource: data
    }
  };
}

export default ResourceDetail;
