import { Resourse } from '@/pages/api/resources';
import { ChangeEvent, useState } from 'react';

interface Props {
  title: string;
  initialData?: Resourse;
  onSubmitForm: (data: Resourse) => void;
}

const defaultValue: Resourse = {
  title: '',
  description: '',
  link: '',
  priority: 1,
  timeToFinish: 60
};

type Form = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const ResourceForm = ({ onSubmitForm, title, initialData }: Props) => {
  const [form, setForm] = useState(initialData || defaultValue);

  const resetForm = () => {
    setForm(initialData || defaultValue);
  };

  const handleChange = (e: ChangeEvent<Form>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8 is-offset-2">
          <div className="mt-6">
            <h1 className="title">{title}</h1>
            <form className="form">
              <div className="field">
                <label className="label">عنوان</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Next JS و Sanity IO را بیاموزید"
                    value={form.title}
                    onChange={handleChange}
                    name="title"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">توضیح</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="این تکنولوژی ها را یاد بگیرید زیرا بسیار محبوب هستند و سئوی بهتری را امکان پذیر می کنند"
                    value={form.description}
                    onChange={handleChange}
                    name="description"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">پیوند</label>
                <div className="control">
                  <input
                    dir="ltr"
                    className="input"
                    type="text"
                    placeholder="https://example.com"
                    value={form.link}
                    onChange={handleChange}
                    name="link"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">اولویت</label>
                <div className="select">
                  <select value={form.priority} onChange={handleChange} name="priority">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>

              <div className="field is-inline-block">
                <label className="label">زمان برای پایان</label>
                <div className="control">
                  <input
                    dir="ltr"
                    className="input"
                    type="number"
                    placeholder="60 (زمان بر حسب دقیقه است)"
                    value={form.timeToFinish}
                    onChange={handleChange}
                    name="timeToFinish"
                  />
                  <p className="help">زمان بر حسب دقیقه است</p>
                </div>
              </div>

              <div className="field is-grouped mt-5">
                <div className="control ml-3">
                  <button
                    className="button is-link"
                    type="button"
                    onClick={() => onSubmitForm(form)}>
                    ارسال
                  </button>
                </div>
                <div className="control">
                  <button className="button is-link is-light" type="button" onClick={resetForm}>
                    تنظیم مجدد
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
