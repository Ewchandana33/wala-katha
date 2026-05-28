import React from "react";

function Video({
  title,
  width = 500,
  height = "auto",
  src,
  ...rest
}: {
  title: string;
  width: number;
  height: number | "auto";
  src: string;
  [key: string]: any;
}) {
  // වීඩියෝ එකේ ඇත්තම URL එක කෝඩ් එක ඇතුළෙන් තහවුරු කර ගැනීම
  const videoUrl = src.match(/^http/) ? src : `/videos/${src}`;

  return (
    <div 
      className="video-wrapper my-4"
      itemScope 
      itemType="https://schema.org/VideoObject"
    >
      {/* 📊 Google Video SEO සඳහා අවශ්‍ය අනිවාර්ය මෙටා ඩේටා */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={`${title} - Exclusive Content on Wal Katha`} />
      <meta itemProp="contentUrl" content={videoUrl} />
      <meta itemProp="uploadDate" content="2026-01-01T00:00:00+05:30" />
      {/* Fallback thumbnail: වීඩියෝ සර්ච් එකට ඩිෆෝල්ට් ඉමේජ් එකක් දීම */}
      <meta itemProp="thumbnailUrl" content="/images/default-video-thumbnail.jpg" />

      <video
        className="overflow-hidden rounded-lg w-full"
        width={width}
        height={height}
        controls
        preload="metadata" // UX/SEO: වීඩියෝ එක ප්ලේ කරනකම් මුළු ෆයිල් එකම බාන එක වළක්වා සයිට් එක ස්පීඩ් කරයි
        {...rest}
      >
        <source src={videoUrl} type="video/mp4" />
        <p>Your browser does not support the video tag. Here is a link to the video: {title}</p>
      </video>
    </div>
  );
}

export default Video;
