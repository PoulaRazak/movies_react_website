import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/movies.api";
import MovieCard from "../../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

function Home() {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const getTrend = getTrendingMovies()
      .then((res) => {
        setTrend(res.data.results);
        // console.log(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="relative h-[70vh] w-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000 }}
          effect="fade"
          loop
          className="h-full"
        >
          {trend.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
              >
                {/* Overlay */}
                <div className="h-full w-full bg-black/60 flex items-end p-8">
                  <h2 className="text-3xl font-bold text-white">
                    {movie.title}
                  </h2>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {trend.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movies={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
export default Home;
