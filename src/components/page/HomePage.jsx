import React from "react";
import globe from "../../assets/images/globe.png";
import satellite from "../../assets/images/satellite.png";
import starTopLeft from "../../assets/images/Star top-left.png";
import starLeft from "../../assets/images/Star-left.png";
import starTopRight from "../../assets/images/Star top-right.png";
import starBottomRight from "../../assets/images/Star bottom-right.png";
import starCenterRight from "../../assets/images/Star center-right.png";
import blueCircle from "../../assets/images/blueEllipse.png";
import tab from "../../assets/images/Layer_x0020_1.png";
import users from "../../assets/images/people.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductList from "../ProductList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="container mx-auto isolate md:text-xl lg:text-[1.5rem] text-white/60">
      <div>
        <img
          src={starTopLeft}
          alt="Star"
          className="hidden md:block absolute -z-10 left-24"
        />
        <img
          src={starTopRight}
          alt="Star"
          className="absolute -z-10 right-5 md:right-10"
        />
        <img
          src={satellite}
          alt="Satellite"
          className="absolute -z-10 top-44 inset-x-0 w-full"
        />
        <img
          src={blueCircle}
          alt=""
          className="hidden md:block absolute top-0 left-0 -z-10"
        />
      </div>

      <div className="mt-10 px-5 md:px-0">
        <div className="max-w-[55rem] w-full mx-auto text-center space-y-5">
          <h1 className="font-secondary font-bold text-[40px] md:text-6xl lg:text-[4.7rem]">
            The Future Workforce
          </h1>
          <p className="md:text-xl lg:text-[1.5rem] text-white/60">
            Creos is revolutionizing the creator economy by leveraging
            blockchain technology, empowering creators in a decentralized
            ecosystem, and fostering innovation, collaboration, and prosperity
            in the digital age.
          </p>
        </div>
        <div className="relative w-full">
          <img
            src={starLeft}
            alt="Star"
            className="absolute bottom-1/2 lg:left-0"
          />
          <img
            src={starCenterRight}
            alt="Star"
            className="absolute top-10 lg:top-40 right-0 lg:right-32"
          />
          <img
            src={starBottomRight}
            alt="Star"
            className="absolute bottom-0 lg:bottom-20 right-5 lg:right-10"
          />
          <img src={globe} alt="Globe" className="mx-auto py-10" />
        </div>
      </div>

      <div className="mt-10 space-y-10 px-5 md:px-0">
        <div className="max-w-[55rem] w-full mx-auto text-center space-y-10">
          <img src={tab} alt="" className="mx-auto px-5 md:px-0" />
          <p>
            In the boundless expanse of our collective imagination, the world’s
            100 role models are what makes CREOS a community and are the
            architects of tomorrow’s world. Each blueprint they craft, each
            stroke of innovation they paint, is a testament to their unwavering
            commitment to shaping a future where creativity knows no bounds and
            possibilities are limitless.
          </p>
          <p>
            Together they stand at the precipice of transformation, driven by a
            shared passion to push the envelope and redefine what is possible.
            At the crucible of collaboration, where minds converge and ideas
            intertwine, they find fertile ground from which greatness emerges.
          </p>
          <p>
            As pioneers and an inspiration to African creators, our mission is
            clear, to ignite the spark of innovation, pioneering new frontiers
            from Africa, and leaving an indelible mark on the fabric of history.
          </p>
        </div>
        <div>
          <img src={users} alt="" className="mx-auto w-full" />
          <div className="mt-10">
            <Link to="/user-list" className="w-full flex justify-end">
              <button className="w-full md:w-[250px] h-16 bg-primary text-tertiary-dark flex justify-center items-center gap-2 rounded-full text-sm font-medium">
                See all
                <span className="text-2xl">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <ProductList />
      </div>
    </section>
  );
};

export default HomePage;
