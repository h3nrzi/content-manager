import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHighlight';
import ResourceList from 'components/ResourceList';
import Footer from '@/components/Footer';
import { Resourse } from '@/pages/api/resources';

function Home({ resources }: { resources: Resourse[] }) {
  return (
    <>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const resData = await fetch(`${process.env.API_URL}/api/resources`);
  const data: Resourse[] = await resData.json();

  return { props: { resources: data } };
};

export default Home;
