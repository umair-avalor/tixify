import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Banner.module.scss";

const Banner: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={`${s.banner}`}>
          <div className={`${s.colLeft}`}>
            <h1>NOW OWN TICKETS OF YOUR FAVOURITE EVENTS</h1>
            <p>
              Tickets aren’t just an entry credential anymore. Own the moment in
              time. The moment and experience are captured in a single NFT.
            </p>
            <Link href="#">
              <a>
                <div className={`${s.inlineBlock} btn-primary`}>Explore</div>
              </a>
            </Link>
          </div>
          <div className={`${s.colRight}`}>
            <div className={s.imgWrapper}>
              <Image src={"/images/banner.png"} alt="ticket" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
