"use client";

const MenuButtons = () => {
  return (
    <ul className="gap-12 hidden md:flex text-md text-text-gray dark:text-white">
      <li className="main">
        <a href="">Главная</a>
      </li>
      <li className="arrow">
        <a href="#myskills">Умения</a>
      </li>
      <li className="arrow">
        <a href="#portfolio">Портфолио</a>
      </li>
      <li className="arrow">
        <a href="#feedback">Обратная связь</a>
      </li>
    </ul>
  );
};

export default MenuButtons;
