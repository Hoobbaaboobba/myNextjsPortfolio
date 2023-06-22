"use client";

const MenuButtons = () => {
  return (
    <ul className="gap-12 hidden md:flex text-md text-text-gray dark:text-white">
      <li className="main">Главная</li>
      <li className="arrow">
        <a>Умения</a>
      </li>
      <li className="arrow">
        <a>Портфолио</a>
      </li>
      <li className="arrow">
        <a>Обратная связь</a>
      </li>
    </ul>
  );
};

export default MenuButtons;
