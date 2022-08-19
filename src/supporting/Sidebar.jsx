import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "../components/Navbar.css";
import SBContent from "./SBContent";
// HamburgerIcon

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <img
        className="Iconbtn"
        onClick={() => onOpen()}
        src="https://i.postimg.cc/bZGc43Y3/images-removebg-preview.png"
        alt=""
      />

      <Drawer onClose={onClose} isOpen={isOpen} size={"full"} >
        <DrawerOverlay />
        <DrawerContent bg={'#C4F1F9'}>
          <DrawerCloseButton bg={'#9DECF9'} width={"80px"} h={"80px"} mt={"50px"} mr={'50px'} />
          <DrawerBody>
            <SBContent onClose={onClose}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
