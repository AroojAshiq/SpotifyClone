import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData,songdata}) => {
  const artist = artistData?.artists[artistId]?.attributes;
  // console.log('songData',songdata);

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-r from-transparent-to-black sm:48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={           
            artistId
            ? artist?.artwork?.url
                .replace("{w}", "125")
                .replace("{h}", "125")
            : songdata?.images?.coverart
          }
          alt="art"
          className="w-28 sm:48 sm:28 h:28 rounded-full object-cover shadow-xl shadow-black border-2"
        />
        <div className="ml-5">
          <p className="text-xl sm:text-3xl text-white">
            {artistId ? artist?.name : songdata?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songdata?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songdata?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songdata?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full h-20  " />
    </div>
  );
};

export default DetailsHeader;
