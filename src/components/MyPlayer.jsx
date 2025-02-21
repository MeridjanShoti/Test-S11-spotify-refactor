import shuffle from "../assets/shuffle.png";
import prev from "../assets/prev.png";
import play from "../assets/play.png";
import next from "../assets/next.png";
import repeat from "../assets/repeat.png";
import { useSelector } from "react-redux";
import musicPlaceholder from "../assets/musicPlaceholder.jpg";
const MyPlayer = () => {
  const playingSong = useSelector((state) => state.selectedSong.content);
  return (
    <>
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div className="row h-100 justify-content-start align-items-center">
              <div className="col-4 d-flex align-items-center justify-content-center gap-5">
                <img
                  src={playingSong ? playingSong.album.cover : musicPlaceholder}
                  alt={playingSong && playingSong.title}
                  height={"50px"}
                />
                <div>
                  {playingSong && <p className="text-white">{playingSong.title}</p>}
                  {playingSong && <p className="text-white">{playingSong.artist.name}</p>}
                </div>
              </div>
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={prev} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={repeat} alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPlayer;
