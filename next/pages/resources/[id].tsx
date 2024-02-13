import Layout from 'components/Layout';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { Resourse } from '../api/resources';
import { useRouter } from 'next/router';

const ResourceDetail = ({ resource }: { resource: Resourse }) => {
  const router = useRouter();

  // if (router.isFallback) return <div>Loading...</div>;

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

// ResourceDetail.getInitialProps = async ({ query }: NextPageContext) => {
//   const dataRes = await fetch('http://localhost:3001/api/resources/' + query?.id);
//   const data = await dataRes.json();
//   console.log('hi');

//   return { resource: data };
// };

export async function getStaticPaths() {
  const resData = await fetch('http://localhost:3001/api/resources');
  const data: Resourse[] = await resData.json();

  const paths = data.map((r) => {
    return {
      params: { id: r.id }
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetServerSidePropsContext) {
  const dataRes = await fetch('http://localhost:3001/api/resources/' + params?.id);
  const data: Resourse[] = await dataRes.json();

  return {
    props: {
      resource: data
    },
    revalidate: 10
  };
}

export default ResourceDetail;
