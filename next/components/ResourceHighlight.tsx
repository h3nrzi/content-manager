import { Resourse } from '@/pages/api/resources';

interface Props {
  resources: Resourse[];
}

const ResourceHighlight = ({ resources }: Props) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((recourse) => (
            <section className="section" key={recourse.id}>
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{recourse.createdAt}</h2>
                    <h1 className="title">{recourse.title}</h1>
                    <p>{recourse.description}</p>
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
