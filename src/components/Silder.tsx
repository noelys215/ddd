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
						<img
							src={item.src}
							alt={item.alt}
							className="rounded-lg w-full h-auto object-cover"
						/>
					</Zoom>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
