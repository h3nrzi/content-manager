import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>قالب وبلاگ Bulma</strong> توسط <a href="https://gonzalojs.com">گونزالو گوتیرز</a>.
          بر اساس
          <Link href="/">jigsaw-blog</Link> است. کد منبع تحت لایسنس
          <Link href="http://opensource.org/licenses/mit-license.php">MIT</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
