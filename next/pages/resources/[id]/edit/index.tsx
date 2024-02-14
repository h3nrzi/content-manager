import ResourceForm from 'components/ResourceForm';
import { Resourse } from '@/pages/api/resources';
import { GetServerSidePropsContext } from 'next/types';
import axios from 'axios';
import router from 'next/router';

const EditResource = ({ resource }: { resource: Resourse }) => {
  const updateResource = (formData: Resourse) => {
    axios
      .patch('/api/resources', formData)
      .then((res) => {
        alert(res.data);
        router.push(`/resources/${formData.id}`);
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <ResourceForm
      title="ویرایش کردن منبع"
      initialData={resource}
      onSubmitForm={(data: Resourse) => updateResource(data)}
    />
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

export default EditResource;
