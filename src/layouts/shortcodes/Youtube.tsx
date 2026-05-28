import React, { useEffect } from "react";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  useEffect(() => {
    import("@justinribeiro/lite-youtube");
  }, []);

  // YouTube thumbnail සහ embed URL එක ස්මාර්ට් විදිහට සකස් කිරීම
  const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <div 
      className="youtube-wrapper my-4"
      itemScope 
      itemType="https://schema.org/VideoObject"
    >
      {/* 📊 Google Video SEO සඳහා අවශ්‍ය සැඟවුණු මෙටා ඩේටා */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={`${title} - Watch on Wal Katha`} />
      <meta itemProp="thumbnailUrl" content={thumbnailUrl} />
      <meta itemProp="embedUrl" content={embedUrl} />
      <meta itemProp="uploadDate" content="2026-01-01T00:00:00+05:30" /> {/* Google Validator එකට අනිවාර්ය ටැගයක් */}

      {/* @ts-ignore */}
      <lite-youtube 
        className="rounded-lg" 
        videoid={id} 
        videotitle={title} 
        {...rest} 
      />
    </div>
  );
};

export default Youtube;
