import React, { useContext, useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { CgLogOut } from "react-icons/cg";
import { BsChatSquareDots } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import logo from "../../images/png/Logo.png";
import { LoginContext } from "../../context/LoginProvider";

const LinkItems = [
  { name: "Conversas 1:1", icon: FiUser },
  { name: "Exemplo", icon: FaTasks },
  { name: "Exemplo", icon: BsChatSquareDots },
  { name: "Exemplo", icon: LuSettings },
];

const SidebarWithHeader = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("white", "white")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  const { logout } = useContext(LoginContext);

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos={"fixed"}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          marginTop={"20px"}
        >
          <img src={logo} alt="Logo" width={"150px"} />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.icon} icon={link.icon}>
          <p className="weight_500_size_15">{link.name}</p>
        </NavItem>
      ))}
      <NavItem height="54.5px" marginTop={"200px"} onClick={() => logout()}>
        <IconButton
          icon={<CgLogOut />}
          background={"none"}
          border={"none"}
          variant="outline"
          aria-label="open menu"
        />
        <p className="weight_500_size_15">Sair</p>
      </NavItem>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#476fe613",
          color: "#476EE6",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _hover={{
              color: "#476EE6",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { user } = useContext(LoginContext);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderRadius={"20px"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        background={"none"}
        border={"none"}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<HiMenuAlt2 color="blue" />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <img src={logo} alt="Logo" width={"130px"} />
      </Text>

      <HStack width={width > 768 && "100%"} spacing={{ base: "0", md: "6" }}>
        <Flex
          width={width > 768 && "100%"}
          alignItems={"center"}
          justifyContent={width > 768 && "space-between"}
        >
          <Menu>
            {width > 768 && (
              <h1 className="weight_600_size_30">Conversas 1:1</h1>
            )}

            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
              background={"none"}
              border={"1px solid #D8D8D8"}
              borderRadius={"60px"}
              padding={"10px"}
            >
              <HStack>
                <Avatar size={"sm"} src={""} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" className="weight_400_size_14">
                    {user.profile?.name}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default SidebarWithHeader;
