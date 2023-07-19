import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { LuMoreVertical } from "react-icons/lu";
import { Container, DivBody, DivHeader, General, Row } from "./style";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeProvider";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import Input from "../../components/Input";

const ModalAction = ({ talk }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"none"}
        _hover={"none"}
        _focus={"none"}
        _active={"none"}
      >
        <LuMoreVertical />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          top={width < 768 && "62%"}
          borderRadius={"20px"}
          height={"270px"}
          position={width < 768 ? "fixed" : "absolute"}
        >
          <ModalHeader>
            Ações <ModalCloseButton />
          </ModalHeader>

          <Row />
          <ModalBody width={"100%"} padding={"0"}>
            <General>
              <ModalCreateEdit talk={talk} />
              <Row />
              <ModalDelete talk={talk} />
              <Row />
            </General>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const ModalDelete = ({ talk }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteTalk } = useContext(HomeContext);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"none"}
        _hover={"none"}
        _focus={"none"}
        _active={"none"}
        className="weight_500_size_18 delete"
      >
        Excluir conversa 1:1
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius={"20px"}
          height={"270px"}
          top={width < 768 && "62%"}
          position={width < 768 && "fixed"}
          paddingBottom={"25px"}
        >
          <ModalHeader
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <DivHeader>
              <Button
                onClick={onClose}
                bg={"none"}
                _hover={"none"}
                _focus={"none"}
                _active={"none"}
                fontSize={"25px"}
              >
                <AiOutlineClose />
              </Button>
              <p className="weight_500_size_18">Excluir conversa 1:1</p>
            </DivHeader>
            <Button
              bg={"#FFE1E1"}
              borderRadius={"50px"}
              color={"#EA0000"}
              className="weight_500_size_15"
              marginLeft={"0px"}
              onClick={() => {
                deleteTalk(talk.id);
                onClose();
              }}
            >
              Excluir
            </Button>
          </ModalHeader>
          <Row />
          <ModalBody>
            <DivBody>
              <p className="weight_400_size_18">
                Tem certeza que deseja excluir o{" "}
                <span className="weight_600_size_18">{talk?.name}?</span>
              </p>
            </DivBody>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalCreateEdit = ({ talk }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newInput, setNewInput] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  const {
    points,
    handleSubmit,
    register,
    errors,
    users,
    deleteTalkPoint,
    createEditTalk,
  } = useContext(HomeContext);
  const point = points.filter((elem) => elem?.talkId == talk?.id);

  const editTalk = (data) => {
    createEditTalk(data, talk?.id, valueInput, true);
    onClose();
  };

  const createTalk = (data) => {
    createEditTalk(data);
  };

  return (
    <>
      {talk === undefined ? (
        <>
          {width < 768 ? (
            <Button
              onClick={onOpen}
              bg={"none"}
              _hover={"none"}
              _focus={"none"}
              _active={"none"}
              className="buttonmore"
            >
              <AiOutlinePlus />
            </Button>
          ) : (
            <Button
              onClick={onOpen}
              bg={"#476EE6"}
              color={"white"}
              width={"176px"}
              height={"45px"}
              borderRadius={"60px"}
              _hover={"none"}
              _focus={"none"}
              _active={"none"}
              className="weight_500_size_15"
            >
              Nova 1:1
            </Button>
          )}

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              borderRadius={"20px"}
              height={width < 768 && "100vh"}
              top={width < 768 && "-60px"}
              position={width < 768 && "fixed"}
              paddingBottom={"25px"}
            >
              <form className="form" onSubmit={handleSubmit(createTalk)}>
                <ModalHeader
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <DivHeader>
                    <Button
                      onClick={onClose}
                      bg={"none"}
                      _hover={"none"}
                      _focus={"none"}
                      _active={"none"}
                      fontSize={"25px"}
                    >
                      <AiOutlineClose />
                    </Button>
                    <p className="weight_500_size_18">Nova conversa 1:1</p>
                  </DivHeader>
                  <Button
                    bg={"#476EE6"}
                    _hover={"none"}
                    _focus={"none"}
                    _active={"none"}
                    borderRadius={"50px"}
                    color={"white"}
                    className="weight_500_size_15"
                    marginLeft={"0px"}
                    type="submit"
                    onClick={onClose}
                  >
                    Criar
                  </Button>
                </ModalHeader>
                <Row />
                <ModalBody width={"100%"} padding={"0"}>
                  <Container>
                    <section className="section_input">
                      <Input
                        label={"Nome da 1:1"}
                        register={register}
                        id={"name"}
                        error={errors?.name}
                        placeholder={"Insira o nome da 1:1"}
                        type={"text"}
                        classInput={"weight_400_size_14 name"}
                        classLabel={"weight_400_size_14"}
                        paddingLeft={"5px"}
                      />
                      <div className="div_date">
                        <Input
                          label={"Data da 1:1"}
                          register={register}
                          id={"date"}
                          error={errors?.date}
                          placeholder={"20/03/2003"}
                          type={"text"}
                          classInput={"weight_400_size_14"}
                          classLabel={"weight_400_size_14"}
                          paddingLeft={"5px"}
                        />
                        <Input
                          label={"Horário da 1:1"}
                          register={register}
                          id={"hour"}
                          error={errors?.hour}
                          placeholder={"09:00-12:30"}
                          type={"text"}
                          classInput={"weight_400_size_14"}
                          classLabel={"weight_400_size_14"}
                          paddingLeft={"5px"}
                        />
                      </div>
                      <div className="div_select">
                        <label className="weight_400_size_14">
                          Convidado da 1:1
                        </label>
                        <select
                          {...register("guestId")}
                          className="weight_400_size_14"
                        >
                          {users.map((elem, index) => {
                            return (
                              <option
                                className="weight_400_size_14"
                                value={elem?.id}
                                key={index}
                              >
                                {elem?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </section>
                    <section className="section_points">
                      <h2 className="weight_500_size_18">
                        Talking Points do 1:1
                      </h2>
                      <ul>
                        {point.map((elem, index) => {
                          return (
                            <>
                              <li key={index}>
                                <div className="div_index">{index + 1}</div>
                                <div>
                                  <label className="weight_400_size_14">
                                    Nome do talking point
                                  </label>
                                  <div className="div_input">
                                    <input
                                      value={elem?.name}
                                      readOnly
                                      type={"text"}
                                      className="weight_400_size_14"
                                    />
                                    <GoTrash
                                      onClick={() => {
                                        deleteTalkPoint(elem.id);
                                      }}
                                      cursor={"pointer"}
                                    />
                                  </div>
                                </div>
                              </li>
                              <div className="row_li">
                                <div></div>
                              </div>
                            </>
                          );
                        })}
                      </ul>
                    </section>

                    <Button
                      bg={"none"}
                      _hover={"none"}
                      _focus={"none"}
                      _active={"none"}
                      marginRight={"80px"}
                      paddingTop={"20px"}
                      color={"#476EE6"}
                      cursor={"pointer"}
                    >
                      + Adicionar novo ponto
                    </Button>
                  </Container>
                </ModalBody>
              </form>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <Button
            onClick={onOpen}
            bg={"none"}
            _hover={"none"}
            _focus={"none"}
            _active={"none"}
            className="weight_500_size_18"
          >
            Editar conversa 1:1
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              borderRadius={"20px"}
              height={width < 768 && "100vh"}
              top={width < 768 && "-60px"}
              position={width < 768 && "fixed"}
              paddingBottom={"25px"}
            >
              <form className="form" onSubmit={handleSubmit(editTalk)}>
                <ModalHeader
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <DivHeader>
                    <Button
                      onClick={onClose}
                      bg={"none"}
                      _hover={"none"}
                      _focus={"none"}
                      _active={"none"}
                      fontSize={"25px"}
                    >
                      <AiOutlineClose />
                    </Button>
                    <p className="weight_500_size_18">Editar conversa 1:1</p>
                  </DivHeader>
                  <Button
                    bg={"#476EE6"}
                    _hover={"none"}
                    _focus={"none"}
                    _active={"none"}
                    borderRadius={"50px"}
                    color={"white"}
                    className="weight_500_size_15"
                    marginLeft={"0px"}
                    type="submit"
                  >
                    Editar
                  </Button>
                </ModalHeader>
                <Row />
                <ModalBody width={"100%"} padding={"0"}>
                  <Container>
                    <section className="section_input">
                      <Input
                        label={"Nome da 1:1"}
                        register={register}
                        id={"name"}
                        error={errors?.name}
                        placeholder={talk?.name}
                        type={"text"}
                        classInput={"weight_400_size_14 name"}
                        classLabel={"weight_400_size_14"}
                        paddingLeft={"5px"}
                      />
                      <div className="div_date">
                        <Input
                          label={"Data da 1:1"}
                          register={register}
                          id={"date"}
                          error={errors?.date}
                          placeholder={talk?.date}
                          type={"text"}
                          classInput={"weight_400_size_14"}
                          classLabel={"weight_400_size_14"}
                          paddingLeft={"5px"}
                        />
                        <Input
                          label={"Horário da 1:1"}
                          register={register}
                          id={"hour"}
                          error={errors?.hour}
                          placeholder={talk?.hour}
                          type={"text"}
                          classInput={"weight_400_size_14"}
                          classLabel={"weight_400_size_14"}
                          paddingLeft={"5px"}
                        />
                      </div>
                      <div className="div_select">
                        <label className="weight_400_size_14">
                          Convidado da 1:1
                        </label>
                        <select
                          {...register("guestId")}
                          className="weight_400_size_14"
                        >
                          {users.map((elem, index) => {
                            return (
                              <option
                                className="weight_400_size_14"
                                value={elem?.id}
                                key={index}
                              >
                                {elem?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </section>
                    <section className="section_points">
                      <h2 className="weight_500_size_18">
                        Talking Points do 1:1
                      </h2>
                      <ul>
                        {point.map((elem, index) => {
                          return (
                            <>
                              <li key={index}>
                                <div className="div_index">{index + 1}</div>
                                <div>
                                  <label className="weight_400_size_14">
                                    Nome do talking point
                                  </label>
                                  <div className="div_input">
                                    <input
                                      value={elem?.name}
                                      readOnly
                                      type={"text"}
                                      className="weight_400_size_14"
                                    />
                                    <GoTrash
                                      onClick={() => {
                                        deleteTalkPoint(elem.id);
                                      }}
                                      cursor={"pointer"}
                                    />
                                  </div>
                                </div>
                              </li>
                              <div className="row_li">
                                <div></div>
                              </div>
                            </>
                          );
                        })}
                      </ul>
                    </section>
                    {newInput ? (
                      <>
                        <div className="newInput">
                          <label className="weight_400_size_14">
                            Novo talking point
                          </label>
                          <input
                            className="weight_400_size_14"
                            placeholder={"Escreva seu novo talking point"}
                            type={"text"}
                            value={valueInput}
                            onChange={(e) => setValueInput(e.target.value)}
                          />
                        </div>
                      </>
                    ) : (
                      <Button
                        bg={"none"}
                        _hover={"none"}
                        _focus={"none"}
                        _active={"none"}
                        marginRight={"80px"}
                        paddingTop={"20px"}
                        color={"#476EE6"}
                        cursor={"pointer"}
                        onClick={() => setNewInput(true)}
                      >
                        + Adicionar novo ponto
                      </Button>
                    )}
                  </Container>
                </ModalBody>
              </form>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default ModalAction;
