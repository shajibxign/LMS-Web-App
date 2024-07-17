import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/getVdoCipherOTP", {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div style={{position:"relative",paddingTop:"56.25%",overflow:"hidden"}}>
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=eeYtKOeS7WUuczEa`}
          // src="https://player.vdocipher.com/v2/?otp=20160313versASE323OCQMY2EQACnrlF5NbOBUlgVQqCy8560PvBytBC0AKw5Udk&playbackInfo=eyJ2aWRlb0lkIjoiMDViNjVjZGQ2MjBiYzVkZDc4NDE2MzE3NGZmMDk1ZWMifQ=="
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
    // <div style="padding-top:41%;position:relative;">
    //   <iframe
    //     src="https://player.vdocipher.com/v2/?otp=20160313versASE3231eDrAglAdpYrefjXybxfquMsoFp9jmJmyf4FCLJqaX7NOg&playbackInfo=eyJ2aWRlb0lkIjoiMDViNjVjZGQ2MjBiYzVkZDc4NDE2MzE3NGZmMDk1ZWMifQ=="
    //     style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;"
    //     allowFullScreen="true"
    //     allow="encrypted-media"
    //   ></iframe>
    // </div>
  );
};

export default CoursePlayer;
