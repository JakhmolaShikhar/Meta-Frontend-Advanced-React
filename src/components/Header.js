import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if(currentScrollY > prevScrollY.current){
        setShowHeader(false);
      } else{
        setShowHeader(true);
      }
      setIsAtTop(currentScrollY === 0);
      prevScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])
  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      transform={showHeader ? "translateY(0)" : "translateY(-200px)"}
      backgroundColor={isAtTop? "#18181b" : "transparent"}
      opacity={isAtTop && showHeader ? 1 : 0.8}  
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {/* Add social media links based on the `socials` data */}
                {socials.map((social) => {
                  return(
                  <a key={social.url} href={social.url} target="_blank" rel="noopener noreferer">
                    <FontAwesomeIcon icon={social.icon} size="xl" />
                  </a>
                )})}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
                
              { <>
                <a href='/projects-section' onClick={handleClick('projects')}>Projects</a>
                <a href='/contactme-section' onClick={handleClick('contactme')}>Contact Me</a>
                </> 
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
