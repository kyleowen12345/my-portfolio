import React from "react"
import { Box, Image, Text, Icon, Stack, Grid, Link } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"
import ProjectBoxContent from "./ProjectBoxContent"

const ProjectBoxes = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const projects = [
    {
      image: "../../kpi.png",
      projectName: "KPI (Canadian job board platform)",
      projectDescription:
        "KPI is a Canadian job board platform that connects job seekers with employers, featuring AI-powered resume building, application tracking, and job matching. It includes trust-building features like identity verification and background checks to help candidates stand out and employers hire with confidence.",
      projectTools: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Supabase",
        "Stripe",
      ],
      externalLink: "https://www.kpi.ca",
      repositoryLink: "",
      youtubelink: "",
    },
    {
      image: "../../home.png",
      projectName: "Füm",
      projectDescription:
        "Füm is a passive device that looks like a vaping pen but contains no nicotine or tobacco, designed for natural inhalation. We rebranded their e-commerce site using Shopify, creating a sleek, modern design with high-quality visuals and intuitive layouts to enhance the user experience and reflect the brand's clean, natural ethos.",
      projectTools: ["Liquid", "Shopify", "React", "HTML/CSS", "Javascript"],
      externalLink: "https://tryfum.com",
      repositoryLink: "",
      youtubelink: "https://www.youtube.com/embed/eUuNcjsSBb8?si=rnjspCONVoSLlmKz",
    },
    {
      image: "../../organic-traditions.png",
      projectName: "Organic Traditions",
      projectDescription:
        "Organic Traditions is a company that creates organic, traditional food products. We developed their e-commerce website using Shopify, implementing a clean, modern design that highlights their premium products and enhances the user experience.",
      projectTools: ["Liquid", "Shopify", "React", "HTML/CSS", "Javascript"],
      externalLink: "https://organictraditions.com",
      repositoryLink: "",
      youtubelink: "",
    },
    {
      image: "../../yard-dawgs.png",
      projectName: "YardDawgs",
      projectDescription:
        "YardDawgs is a mobile application that allows users to create and manage their own yard sale events. It features a user-friendly interface for organizing items, setting up sale locations, and connecting with potential buyers.",
      projectTools: ["React ", ".Net", "Hubspot"],
      externalLink: "https://www.yarddawgslawncare.ca",
      repositoryLink: "",
      youtubelink: "",
    },
    {
      image: "../../brooklyn-biltong.png",
      projectName: "Brooklyn Biltong",
      projectDescription:
        "Brooklyn Biltong is a premium meat snack brand that creates high-quality, artisanal beef jerky. We developed their e-commerce website using Shopify, implementing a clean, modern design that highlights their premium products and enhances the user experience.",
      projectTools: ["Liquid", "Shopify", "React", "HTML/CSS", "Javascript"],
      externalLink: "https://www.brooklynbiltong.com",
      repositoryLink: "",
      youtubelink: "",
    },
  ]

  return (
    <Stack width={["100%"]} spacing={10} ref={ref}>
      {projects.map((i) => (
        //  1
        <ProjectBoxContent i={i} key={i.projectName} />
      ))}
    </Stack>
  )
}

export default ProjectBoxes
