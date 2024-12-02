import React, { useEffect } from "react";
import { Container, Text, Stack, useDisclosure } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useMyRoute } from "../../lib/routeprovider";
import ContactIntro from "./ContactIntro";
import ContactContent from "./ContactContent";
import { PageStyles } from "../../constants/styles";

const Contact = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { setSection } = useMyRoute();

  useEffect(() => {
    if (inView) {
      setSection("/#contact");
    }
  }, [inView]);
  return (
    <Stack
      className={inView ? "animated-box" : ""}
      direction={["column"]}
      id="contact"
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
      <ContactIntro />
      <ContactContent />
    </Stack>
  );
};

export default Contact;
