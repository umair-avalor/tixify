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
        </div>
      </div>
    </>
  );
};

export default TicketDetailsPage;
