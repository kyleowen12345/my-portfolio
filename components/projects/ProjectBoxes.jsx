import React from "react";
import { Box, Image, Text, Icon, Stack, Grid, Link } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import ProjectBoxContent from "./ProjectBoxContent";

const ProjectBoxes = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const projects = [
    {
      image: "../../home.png",
      projectName: "Füm",
      projectDescription:
        "Füm is a passive device that looks like a vaping pen but contains no nicotine or tobacco, designed for natural inhalation. We rebranded their e-commerce site using Shopify, creating a sleek, modern design with high-quality visuals and intuitive layouts to enhance the user experience and reflect the brand’s clean, natural ethos.",
      projectTools: ["Liquid", "Shopify", "React", "HTML/CSS", "Javascript"],
      externalLink: "https://tryfum.com",
      repositoryLink: "",
      youtubelink:
        "https://www.youtube.com/embed/eUuNcjsSBb8?si=rnjspCONVoSLlmKz",
    },
    {
      image: "../../home.png",
      projectName: "YARD DAWGS",
      projectDescription:
        "Yard Dawgs is known for providing the best lawn care in Calgary, offering competitively priced, high-quality lawn care packages. We revamped their website using HubSpot, delivering a modern, professional design with high-quality visuals and intuitive layouts. The new site enhances user experience and effectively showcases their commitment to excellence in lawn care.",
      projectTools: ["HubL", "HTML/CSS", "Javascript"],
      externalLink: "https://www.yarddawgslawncare.ca/",
      repositoryLink: "",
      youtubelink:
        "https://www.youtube.com/embed/uva59vn0IE8?si=zkMNBUOhty4_TRE0",
    },
    {
      image: "../../home.png",
      projectName: "BHY (mobile application)",
      projectDescription:
        "A social media platform with fitness assistance tracker. It also has a marketplace where they can purchase insurance plans offered by FWD and gives statistical data to show the status of insurance in different countries.",
      projectTools: ["React-Native", "Express", "MongoDB"],
      externalLink: "disabled",
      repositoryLink:
        "https://github.com/kyleowen12345/FwdApp/tree/Kaking's_branch",
      youtubelink: "https://www.youtube.com/embed/p6qAlL1JMmk",
    },
  ];

  return (
    <Stack width={["100%"]} spacing={10} ref={ref}>
      {projects.map((i) => (
        //  1
        <ProjectBoxContent i={i} key={i.projectName} />
      ))}
    </Stack>
  );
};

export default ProjectBoxes;
