import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SliderProps {
	array: { src: string; alt: string }[];
}

export const Slider: React.FC<SliderProps> = ({ array }) => {
	return (
		<Swiper
			className="swiper"
			keyboard={{
				enabled: true,
			}}
			effect="fade"
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, EffectFade, Navigation]}>
			{array.map((item) => (
				<SwiperSlide className="swiper-slide" key={item.src}>
					<Zoom>
						<div className="relative w-full h-0 pb-[56.25%]">
							<img
								src={item.src}
								alt={item.alt}
								className="absolute top-0 left-0 w-full h-0  rounded-lg"
							/>
						</div>
					</Zoom>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
