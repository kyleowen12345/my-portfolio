import React from "react";
import { Box, Image, Text, Icon, Stack, Grid, Link } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import ProjectBoxContent from "./ProjectBoxContent";

const ProjectBoxes = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const projects = [
    {
      image: "../../Forage.png",
      projectName: "Foragesoft",
      projectDescription:
        "Foragesoft is a Multi-Tenant Dealer Management System designed specifically for the agriculture industry, streamlining operations, inventory management, and dealer communications.",
      projectTools: ["React", ".Net", "Quickbooks", "Zapier"],
      externalLink: "https://foragesoft.com/",
      repositoryLink: "",
      youtubelink: "",
    },
    // {
    //   image: "../../Forage.png",
    //   projectName: "Period",
    //   projectDescription:
    //     "Foragesoft is a Multi-Tenant Dealer Management System designed specifically for the agriculture industry, streamlining operations, inventory management, and dealer communications.",
    //   projectTools: ["React", ".Net", "Quickbooks", "Zapier"],
    //   externalLink: "https://foragesoft.com/",
    //   repositoryLink: "",
    //   youtubelink: "",
    // },
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
