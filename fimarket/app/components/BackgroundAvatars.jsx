import React, { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import { pseudoApps } from "../data/apps";
import { keyframes } from "@emotion/react";

const getRandomPosition = (max) => Math.floor(Math.random() * max);
const getRandomSize = () => Math.floor(Math.random() * 100) + 50;

const moveAvatar = keyframes`
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
`;

const generateAvatarStyle = () => {
  const size = getRandomSize();
  return {
    position: "absolute",
    top: `100vh`,
    left: `${getRandomPosition(90)}%`,
    width: size,
    height: size,
    opacity: 0.3,
    animation: `${moveAvatar} ${getRandomSize()}s linear infinite`,
  };
};

const BackgroundAvatars = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const avatarArray = pseudoApps.map((app, index) => ({
        key: index,
        src: app.logo,
        style: generateAvatarStyle(),
      }));
      setAvatars(avatarArray);
    }, 2000); // Refrescar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "clip",
      }}
    >
      {avatars.map((avatar) => (
        <Avatar key={avatar.key} src={avatar.src} sx={avatar.style} />
      ))}
    </Box>
  );
};

export default BackgroundAvatars;
