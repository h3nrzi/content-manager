import Layout from 'components/Layout';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Resourse } from '@/pages/api/resources';

const ResourceDetail = ({ resource }: { resource: Resourse }) => {
  const router = useRouter();

  return (
    <Layout>
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
                    <Link href={`/resources/${resource.id}/edit`} legacyBehavior>
                      <a className="button is-warning">ویرایش</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
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
