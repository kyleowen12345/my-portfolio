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
        "KPI is a Canadian job board platform that connects job seekers with employers, featuring AI-powered resume building using the Claude API, application tracking, and job matching. It includes trust-building features like identity verification (Plaid), background checks (Certn), and Stripe payment integration. Built with admin dashboards, real-time messaging, and complex data-driven workflows.",
      projectTools: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Node.js",
        "Fastify",
        "PostgreSQL",
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
        "Füm is a health-focused brand offering a natural inhalation device as an alternative to vaping. We led a complete storefront rebrand using Shopify — custom theme development, optimized checkout flows, and performance improvements including code splitting and image optimization, contributing to a 3x increase in sales.",
      projectTools: ["Liquid", "Shopify", "React", "HTML/CSS", "Javascript"],
      externalLink: "https://tryfum.com",
      repositoryLink: "",
      youtubelink: "https://www.youtube.com/embed/eUuNcjsSBb8?si=rnjspCONVoSLlmKz",
    },
    {
      image: "../../organic-traditions.png",
      projectName: "Organic Traditions",
      projectDescription:
        "Organic Traditions creates premium organic food products. We developed their e-commerce website using Shopify with a clean, conversion-focused design and performance optimizations that contributed to a 3x increase in sales.",
      projectTools: ["Liquid", "Shopify", "React", "HTML/CSS", "Javascript"],
      externalLink: "https://organictraditions.com",
      repositoryLink: "",
      youtubelink: "",
    },
    {
      image: "../../yard-dawgs.png",
      projectName: "Yard Dawgs",
      projectDescription:
        "Yard Dawgs is a lawn care franchise management system with HubSpot CRM integration for lead management, customer tracking, and booking. Built with a .NET backend and React frontend, it supports multiple franchise locations across Canada.",
      projectTools: ["React", ".NET", "HubSpot"],
      externalLink: "https://www.yarddawgslawncare.ca",
      repositoryLink: "",
      youtubelink: "",
    },
    {
      image: "../../brooklyn-biltong.png",
      projectName: "Brooklyn Biltong",
      projectDescription:
        "Brooklyn Biltong is a premium artisanal meat snack brand. We developed their Shopify store with custom product pages, variant selectors, subscription integration via Loop, and BOGO/free gift promotional logic to drive conversions.",
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
