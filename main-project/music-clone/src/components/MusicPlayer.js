import React, { useEffect, useRef, useState } from "react";

export const MusicPlayer = (selectedMusic) => {

  const audioRef = useRef();
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  const { thumbnail, title, artist, audio_url } = selectedMusic;
  const artistList = artist && artist.map((item) => item.name).join(" & ");

  useEffect(()=>{
    audioRef.current.play();
  },[selectedMusic])

  return (
    <section className="music-player">
      <img src={thumbnail} alt={title} height="50" width="50" />
      <>
        <div className="song-info">
          <div>{title}</div>
          <div title={artistList} className="artist-list">
            {artistList}
          </div>
        </div>
        <audio controls ref={audioRef} src={audio_url} />
        
        <div className="heart-icon">
          {addedToWatchlist ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
        </div>
      </>
    </section>
  );
};

export default MusicPlayer;