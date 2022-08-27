import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./TicketCard.module.scss";

const TicketCard: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={`${s.TicketCard}`}>
          <p className={s.headingOne}>UPCOMING EVENTS</p>
          <div className="row">
            <div className="col-md-4">
              <div className={`${s.cardWrapper}`}>
                <div className={s.imgWrapper}>
                  <Image src={"/images/ticket.png"} alt="" layout="fill" />
                </div>
                <div className={`${s.cardTitle}`}>Unfold 2022</div>
                <p>25th August 2022</p>
                <Link href="#">
                  <a>
                    <div className={`btn-primary ${s.btn}`}>View Details</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${s.cardWrapper}`}>
                <div className={s.imgWrapper}>
                  <Image src={"/images/ticket.png"} alt="" layout="fill" />
                </div>
                <div className={`${s.cardTitle}`}>Unfold 2022</div>
                <p>25th August 2022</p>
                <Link href="#">
                  <a>
                    <div className={`btn-primary ${s.btn}`}>View Details</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${s.cardWrapper}`}>
                <div className={s.imgWrapper}>
                  <Image src={"/images/ticket.png"} alt="" layout="fill" />
                </div>
                <div className={`${s.cardTitle}`}>Unfold 2022</div>
                <p>25th August 2022</p>
                <Link href="#">
                  <a>
                    <div className={`btn-primary ${s.btn}`}>View Details</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${s.cardWrapper}`}>
                <div className={s.imgWrapper}>
                  <Image src={"/images/ticket.png"} alt="" layout="fill" />
                </div>
                <div className={`${s.cardTitle}`}>Unfold 2022</div>
                <p>25th August 2022</p>
                <Link href="#">
                  <a>
                    <div className={`btn-primary ${s.btn}`}>View Details</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${s.cardWrapper}`}>
                <div className={s.imgWrapper}>
                  <Image src={"/images/ticket.png"} alt="" layout="fill" />
                </div>
                <div className={`${s.cardTitle}`}>Unfold 2022</div>
                <p>25th August 2022</p>
                <Link href="#">
                  <a>
                    <div className={`btn-primary ${s.btn}`}>View Details</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${s.cardWrapper}`}>
                <div className={s.imgWrapper}>
                  <Image src={"/images/ticket.png"} alt="" layout="fill" />
                </div>
                <div className={`${s.cardTitle}`}>Unfold 2022</div>
                <p>25th August 2022</p>
                <Link href="#">
                  <a>
                    <div className={`btn-primary ${s.btn}`}>View Details</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
