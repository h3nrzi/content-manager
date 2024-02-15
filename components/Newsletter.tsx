const Newsletter = () => {
  return (
    <section className="section">
      <div className="columns">
        <div className="column is-10 is-offset-1 m-auto">
          <div className="container has-text-centered is-fluid">
            <div className="hero is-light">
              <div className="hero-body">
                <h2 className="title is-4">برای دریافت خبرنامه ما ثبت‌نام کنید</h2>
                <div className="column is-6 is-offset-3 m-auto">
                  <div className="field has-addons has-addons-centered">
                    <div className="control is-expanded">
                      <input className="input " type="text" placeholder="آدرس ایمیل" />
                    </div>
                    <div className="control button is-info mr-1">اشتراک</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
