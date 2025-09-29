import React from "react";
import AutoScroll from 'embla-carousel-auto-scroll'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { children, options , autoScroll = false } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: autoScroll })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla flex items-center justify-between !w-full">
     {!autoScroll && <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />}
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      {!autoScroll && <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />}
    </section>
  );
};

export default EmblaCarousel;
