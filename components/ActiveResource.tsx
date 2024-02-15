import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Resourse } from '@/pages/api/resources';
import moment from 'moment';
import router from 'next/router';

const ActiveResource = () => {
  const [resource, setResource] = useState<null | Resourse>();
  const [seconds, setSeconds] = useState<null | number>(null);

  useEffect(() => {
    axios.get<Resourse>('/api/activeresource').then((res) => {
      const resource = res.data;

      const elapsedTime = moment().diff(moment(resource.activationTime), 'seconds');
      const timeToFinish = resource.timeToFinish * 60 - elapsedTime;

      if (timeToFinish >= 0) {
        resource.timeToFinish = timeToFinish;
        setSeconds(timeToFinish);
      }

      setResource(resource);
    });
  }, []);

  useEffect(() => {
    if (seconds) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      if (seconds <= 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [seconds]);

  const completeResource = async () => {
    axios
      .patch('/api/resources', { ...resource, status: 'اتمام' })
      .then(() => router.reload())
      .catch((err) => alert('نمیتوان منبع را پایان داد'));
  };

  return (
    resource && (
      <div className="active-resource">
        <h1 className="active-resource__name">{resource.title}</h1>
        <div className="time-wrapper">
          <h2 className="time-wrapper__elapsed-time">
            {seconds ? (
              seconds
            ) : (
              <button
                className="button is-info"
                onClick={() => {
                  completeResource();
                  setResource(null);
                }}>
                اتمام !
              </button>
            )}
          </h2>
        </div>

        <Link href={`/resources/${resource.id}`} legacyBehavior>
          <a className="button has-text-link">رفتن به منبع</a>
        </Link>
      </div>
    )
  );
};

export default ActiveResource;
