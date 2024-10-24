import React, { useCallback } from 'react';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface SliderProps {
	array: { src: string; alt: string }[];
	options?: EmblaOptionsType;
}

export const Slider: React.FC<SliderProps> = ({ array }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [Fade()]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="slider-container w-full mx-auto relative">
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					{array.map((item) => (
						<div className="embla__slide relative" key={item.src}>
							<Zoom>
								<img
									src={item.src}
									alt={item.alt}
									className="w-full h-auto object-contain rounded-lg"
								/>
							</Zoom>
						</div>
					))}
				</div>
				{/* Arrows */}
				<div className="arrow-container absolute inset-0 flex justify-between items-center pointer-events-none">
					<button className="embla__prev pointer-events-auto" onClick={scrollPrev}>
						<CaretLeft size={50} weight="bold" className="text-pink-500" />
					</button>
					<button className="embla__next pointer-events-auto" onClick={scrollNext}>
						<CaretRight size={50} weight="bold" className="text-pink-500" />
					</button>
				</div>
			</div>
		</div>
	);
};
