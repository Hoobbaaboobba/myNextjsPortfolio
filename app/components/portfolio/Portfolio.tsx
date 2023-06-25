"use client";

import PortfolioItem from "./PortfolioItem";
import ImageMockup from "../../images/portfolioMockup.png";
import ImageBarber from "../../images/portfolioBarber.png";
import ImageGym from "../../images/portfolioGym.png";
import ImageRenta from "../../images/portfolioRentasnab.png";
import ImageChe from "../../images/portfolioChe.png";
import ImageAlexis from "../../images/portfolioAlexis.png";
import ImageTrip from "../../images/portfolioTrip.png";

const Portfolio = () => {
  return (
    <div className="relative text-center mt-[70px] px-6 flex flex-col justify-center items-center">
      <div id="portfolio" className="absolute top-[-100px]"></div>
      <h1 className="text-[45px] lg:text-[4rem] font-semibold">Портфолио</h1>
      <p className="text-center text-xl mb-[20px] lg:mb-[50px] text-text-gray">
        Здесь собраны все проекты, разработанные мной, в течение года работы на
        фрилансе
      </p>
      <div className="flex flex-wrap py-[60px] max-w-[1300px] w-full justify-center items-center gap-4">
        <PortfolioItem
          image={ImageMockup}
          name="Gohub"
          tech="HTML CSS JavaScript"
          linkName="Gohub.io"
          inst="GULP SASS ReactJs"
          link="https://hoobbaaboobba.github.io/mockup/"
        />
        <PortfolioItem
          image={ImageBarber}
          name="Barbershop"
          tech="HTML CSS JavaScript"
          linkName="Barbershop.io"
          inst="GULP SASS"
          link="https://hoobbaaboobba.github.io/barbershop/"
        />
        <PortfolioItem
          image={ImageGym}
          name="Sport Center"
          tech="HTML CSS JavaScript"
          linkName="SportCenter.io"
          inst="GULP SASS"
          link="https://hoobbaaboobba.github.io/gym/"
        />
        <PortfolioItem
          image={ImageRenta}
          name="SeverSnab"
          tech="HTML CSS JavaScript"
          linkName="SeverSnab.io"
          inst="GULP SASS ReactJs"
          link="https://hoobbaaboobba.github.io/rentasnabb.github.io/"
        />
        <PortfolioItem
          image={ImageChe}
          name="Ольга"
          tech="HTML CSS JavaScript"
          linkName="ОльгаЧё.io"
          inst="GULP SASS"
          link="https://hoobbaaboobba.github.io/MKCHE/"
        />
        <PortfolioItem
          image={ImageAlexis}
          name="Alexis"
          tech="HTML CSS JavaScript"
          linkName="Alexis.io"
          inst="GULP SASS"
          link="https://hoobbaaboobba.github.io/alexis/"
        />
        <PortfolioItem
          image={ImageTrip}
          name="Trip"
          tech="HTML CSS JavaScript"
          linkName="Trip.io"
          inst="GULP SASS"
          link="https://hoobbaaboobba.github.io/trip/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
