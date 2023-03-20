import React from 'react';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';

function CustomerReview() {
  return (
    <div className="pb-10 lg:pb-14">
      <div className="text-3xl font-bold text-stone text-center mb-14 text-fade">Customer Review</div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between">
        <div className="flex lg:max-w-customerReviewCard mb-5 mx-5 align-center justify-between rounded bg-banner shadow">
          <div className="p-5 flex flex-col justify-between">
            <div className="italic text-fade mb-7">
            Excellent value for money holiday. My questions were all answerd promptly and when my consultant was unavailable, another staff member would respond.
            </div>
            <div>
              <div className="flex align-center">
                <div>
                  <Image
                    src="/testimonial/person_1.png"
                    width={40}
                    height={40}
                    alt="Person"
                    className="mr-2"
                  />
                </div>
                <div className="mb-5">
                  <div className="text-sm font-bold">Samantha Bells</div>
                  <div className="text-xs">Reporter</div>
                </div>
              </div>
              <div className="flex">
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:max-w-customerReviewCard mb-5 mx-5 align-center justify-between rounded bg-banner shadow">
          <div className="p-5 flex flex-col justify-between">
            <div className="italic text-fade mb-7">
              Easy booking no problems with using vouchers or service. Voucher received in mail when we got home. Bonus for next holiday. Thank you
            </div>
            <div>
              <div className="flex align-center">
                <div>
                  <Image
                    src="/testimonial/person_2.png"
                    width={40}
                    height={40}
                    alt="Person"
                    className="mr-2"
                  />
                </div>
                <div className="mb-5">
                  <div className="text-sm font-bold">Carmen Gloria</div>
                  <div className="text-xs">Traveller</div>
                </div>
              </div>
              <div className="flex">
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:max-w-customerReviewCard mb-5 mx-5 align-center justify-between rounded bg-banner shadow">
          <div className="p-5 flex flex-col justify-between">
            <div className="italic text-fade mb-7">
            Very Easy booking no problems with using vouchers or service. Voucher received in mail when we got home. Bonus for next holiday. Thank you
            </div>
            <div>
              <div className="flex align-center">
                <div>
                  <Image
                    src="/testimonial/person_3.png"
                    width={40}
                    height={40}
                    alt="Person"
                    className="mr-2"
                  />
                </div>
                <div className="mb-5">
                  <div className="text-sm font-bold">Braydle Caris</div>
                  <div className="text-xs">Photographer</div>
                </div>
              </div>
              <div className="flex">
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
                <ReactSVG src="/star.svg" height={20} width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview;
