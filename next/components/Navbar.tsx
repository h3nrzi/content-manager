import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container is-flex-direction-row-reverse">
        <Link href="/" legacyBehavior>
          <a className="navbar-item">
            <h1>لوگو</h1>
          </a>
        </Link>
        <div className="navbar-brand">
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link href="" legacyBehavior>
              <a className="navbar-item is-active is-size-5 has-text-weight-semibold">خانه</a>
            </Link>
            <Link href="/resources/new" legacyBehavior>
              <a className="navbar-item is-size-5 has-text-weight-semibold">اضافه کردن</a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="navbar-item is-size-5 has-text-weight-semibold">ویژگی‌ها</a>
            </Link>
            <div className=" navbar-item">
              <div className="control has-icons-left">
                <input className="input is-rounded" type="email" placeholder="جستجو" />
                <span className="icon is-left">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
