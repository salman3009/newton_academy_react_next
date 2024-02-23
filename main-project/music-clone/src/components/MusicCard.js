import React from "react";

function MusicCard(props) {
    
  const { title, thumbnail, artist,id,setSelectedMusic} = props;
  const artistList = artist.map((item) => item.name).join(" & ");
  return (
    <section
      className="musicCard"
    >
      <img
        src={thumbnail}
        alt={title}
        height="150"
        width="150"
        onClick={()=>setSelectedMusic(id)}
        className="bannerImg"
      />
      <div>{title}</div>
      <div className="artist" title="artistList">
        {artistList}
      </div>
    </section>
  );
};

export default MusicCard;