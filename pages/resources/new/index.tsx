import axios from 'axios';
import { useRouter } from 'next/router';
import ResourceForm from 'components/ResourceForm';
import { Resourse } from '@/pages/api/resources';

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData: Resourse) => {
    axios
      .post('/api/resources', formData)
      .then((res) => {
        alert(res.data);
        router.push('/');
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <ResourceForm
      title="افزودن منبع جدید"
      onSubmitForm={(data: Resourse) => createResource(data)}
    />
  );
};

export default ResourceCreate;
