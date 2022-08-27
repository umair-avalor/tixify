import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./TicketDetailsPage.module.scss";

const TicketDetailsPage: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={`${s.ticketimg}`}>
          <div className={s.imgWrapper}>
            <Image
              src={"/images/ticket-large.png"}
              alt="ticket"
              layout="fill"
            />
          </div>
        </div>

        <div className={s.ticketDetailsCard}>
          <div className={`${s.topRow}`}>
            <div className={`${s.leftCol}`}>
              <p className={s.title}>Unfold 2022</p>
              <p className={s.creater}>Created by Tixify</p>
            </div>
            <div className={`${s.colRight}`}>
              <Link href="#">
                <a>
                  <div className={`btn-primary`}>Buy Now</div>
                </a>
              </Link>
            </div>
          </div>

          <div className={s.ticketDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            molestias maiores molestiae. Eius, quia ipsa. Veritatis eveniet
            sequi ducimus delectus nihil dolore sed architecto, vero id rem
            commodi libero voluptate!
          </div>

          <div className={`${s.locationRow}`}>
            <div className={s.singleBlock}>
              <div className={s.calender}>
                <Image
                  src={"/images/calender.png"}
                  alt="calender"
                  layout="fill"
                />
              </div>
              25th-27th August 2022
            </div>
            <div className={s.singleBlock}>
              <div className={s.location}>
                <Image
                  src={"/images/location.png"}
                  alt="calender"
                  layout="fill"
                />
              </div>
              Sheraton Grand
            </div>
          </div>

          <div className={`${s.ticketMetaData}`}>
            <div className={`${s.metaBlockSingle}`}>
              20 <br />
              Tickets Left
            </div>

            <div className={`${s.metaBlockSingle}`}>
              50 <br />
              Tickets Volume
            </div>

            <div className={`${s.metaBlockSingle}`}>
              30 <br />
              Price in USD
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetailsPage;
