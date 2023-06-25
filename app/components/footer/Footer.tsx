const Footer = () => {
  return (
    <footer className="dark:bg-black w-full text-center py-[70px] border-t border-gray-border bg-footer-bg dark:border-gray-border">
      <p className="text-xl font-semibold">Этот сайт сделан с помощью</p>
      <h1 className="text-4xl font-semibold my-6">
        <span className="purpleText">Next Js</span>{" "}
        <span className="orangeText">x</span>{" "}
        <span className="blueText">TailwinCss</span>
      </h1>
      <p className="text-md dark:text-white text-text-gray">
        Вдохновлен Next.js
      </p>
      <p className="text-lg font-semibold">© 2023 Lexus Inc.</p>
    </footer>
  );
};

export default Footer;
