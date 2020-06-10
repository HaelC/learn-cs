import React from "react";

const channels = [
  {
    name: "Traversy Media",
    link: "https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA",
    avatar:
      "https://yt3.ggpht.com/a/AATXAJy4aoHWxMClOcfkfUlJXUwQ2dLAHh4a0Aib4g=s100-c-k-c0xffffffff-no-rj-mo",
    description:
      "Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more",
  },
];

const Youtube = () => {
  return (
    <div>
      <h2>Channels</h2>
      <ul>
        {channels.map(channel => (
          <li>
            {channel.name}
            <a href={channel.link}>Link</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Youtube;
