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
    triggerOnce: true,
  });
  const { setSection } = useMyRoute();

  useEffect(() => {
    if (inView) {
      setSection("/#contact");
    }
  }, [inView]);
  return (
    <Stack
      className={inView ? "animated-box" : "animated-box-hidden"}
      direction={["column"]}
      id="contact"
      spacing={10}
      ref={ref}
      width={"100%"}
    >
      <ContactIntro />
      <ContactContent />
    </Stack>
  );
};

export default Contact;
