import React, { useEffect } from "react";
import { Stack } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useMyRoute } from "../../lib/routeprovider";
import ProjectIntro from "./ProjectIntro";
import ProjectBoxes from "./ProjectBoxes";
import { PageStyles } from "../../constants/styles";

const Projects = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { setSection } = useMyRoute();

  useEffect(() => {
    if (inView) {
      setSection("/#projects");
    }
  }, [inView]);

  return (
    <Stack
      className={inView ? "animated-box" : ""}
      ref={ref}
      id="projects"
      maxWidth={PageStyles.maxWidth}
      paddingX={[
        PageStyles.paddingMobile,
        PageStyles.paddingMobile,
        PageStyles.paddingTablet,
        PageStyles.paddingDesktop,
      ]}
      spacing={10}
      margin={"auto"}
      width={"100%"}
    >
      <ProjectIntro />
      <ProjectBoxes />
    </Stack>
  );
};

export default Projects;
