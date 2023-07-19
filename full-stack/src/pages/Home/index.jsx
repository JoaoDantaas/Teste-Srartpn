import { useContext, useEffect, useState } from "react";
import SidebarWithHeader from "../../components/SideBar";
import {
  ContainerDesktop,
  ContainerMobile,
  ContainerNotes,
  ContainerPoints,
  ContainerUl,
} from "./style";
import { BiSearch } from "react-icons/bi";
import Button from "../../components/Button";
import { HomeContext } from "../../context/HomeProvider";

import { useNavigate } from "react-router-dom";
import ModalAction, { ModalCreateEdit } from "../../components/ModalAction";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [buttonFilter, setButtonFilter] = useState(true);
  const [classButtonFilterT, setClassButtonFilterT] = useState("selected");
  const [classButtonFilterF, setClassButtonFilterF] = useState("");
  const [pointsFilter, setPointsFilter] = useState([]);
  const [notesFilter, setNotesFilter] = useState([]);
  const [talksFilter, setTalksFilter] = useState([]);
  const [inputNote, setInputNote] = useState("");

  const { talks, users, taskChecked, points, notes, createTalkNote } =
    useContext(HomeContext);

  const filter = (id) => {
    setPointsFilter(points.filter((elem) => elem?.talkId === id));
    setNotesFilter(notes.filter((elem) => elem?.talkId === id));
    setTalksFilter(talks.filter((elem) => elem.id === id));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {width > 768 ? (
        <>
          <SidebarWithHeader>
            <ContainerDesktop>
              <div className="div_container">
                <div className="div_container_filter">
                  <div className="div_buttonfilter">
                    <Button
                      background={"none"}
                      borderRadius={"100px"}
                      color={"#476EE6"}
                      className={`weight_500_size_15 ${classButtonFilterT}`}
                      name={"1:1 agendadas"}
                      onClick={() => {
                        setClassButtonFilterT("selected");
                        setClassButtonFilterF("");
                        setButtonFilter(true);
                      }}
                    />
                    <Button
                      background={"none"}
                      borderRadius={"100px"}
                      color={"#476EE6"}
                      className={`weight_500_size_15 ${classButtonFilterF}`}
                      name={"1:1 realizadas"}
                      onClick={() => {
                        setClassButtonFilterT("");
                        setClassButtonFilterF("selected");
                        setButtonFilter(false);
                      }}
                    />
                  </div>
                  <div className="div_search">
                    <BiSearch color="#476EE6" />
                    <input type="text" placeholder="Pesquisar" />
                  </div>
                </div>
                <ModalCreateEdit />
              </div>
              <section className="section_talks">
                <ContainerUl>
                  {talks.map((elem, i) => {
                    if (!elem.checked && buttonFilter) {
                      return (
                        <li key={i}>
                          <section>
                            <input
                              type="checkbox"
                              checked={false}
                              onChange={() =>
                                taskChecked(elem.id, true, "talk")
                              }
                            />
                            <div className="general_div">
                              <h2 className="weight_500_size_14">
                                {elem?.name}
                              </h2>
                              <div className="date">
                                <p className="weight_500_size_12">
                                  {elem?.date}
                                </p>
                                <p>-</p>
                                <p className="weight_500_size_12">
                                  {elem?.hour}
                                </p>
                              </div>
                            </div>
                            <ModalAction talk={elem} />
                          </section>
                          <div className="row">
                            <div onClick={() => filter(elem?.id)}></div>
                            <input readOnly onClick={() => filter(elem?.id)} />
                          </div>
                          <section onClick={() => filter(elem?.id)}>
                            <div>
                              <h3 className="weight_500_size_14">
                                Organizador
                              </h3>
                              {users.map((element, index) => {
                                return (
                                  element?.id === elem?.ownerId && (
                                    <p
                                      key={index}
                                      className="weight_500_size_14"
                                    >
                                      {element?.name}
                                    </p>
                                  )
                                );
                              })}
                            </div>
                            <div>
                              <h3 className="weight_500_size_14">Convidado</h3>
                              {users.map((element, index) => {
                                return (
                                  element?.id === elem?.guestId && (
                                    <p
                                      key={index}
                                      className="weight_500_size_14"
                                    >
                                      {element?.name}
                                    </p>
                                  )
                                );
                              })}
                            </div>
                          </section>
                        </li>
                      );
                    } else if (elem.checked && !buttonFilter) {
                      return (
                        <li key={i}>
                          <section>
                            <input
                              type="checkbox"
                              checked
                              onChange={() =>
                                taskChecked(elem?.id, false, "talk")
                              }
                            />
                            <div className="general_div">
                              <h2 className="weight_500_size_14">
                                {elem?.name}
                              </h2>
                              <div className="date">
                                <p className="weight_500_size_12">
                                  {elem?.date}
                                </p>
                                <p>-</p>
                                <p className="weight_500_size_12">
                                  {elem?.hour}
                                </p>
                              </div>
                            </div>
                            <ModalAction talk={elem} />
                          </section>
                          <div className="row">
                            <div onClick={() => filter(elem?.id)}></div>
                            <input readOnly onClick={() => filter(elem?.id)} />
                          </div>
                          <section onClick={() => filter(elem?.id)}>
                            <div>
                              <h3 className="weight_500_size_14">
                                Organizador
                              </h3>
                              {users.map((element, index) => {
                                return (
                                  element?.id === elem?.ownerId && (
                                    <p
                                      key={index}
                                      className="weight_500_size_14"
                                    >
                                      {element?.name}
                                    </p>
                                  )
                                );
                              })}
                            </div>
                            <div>
                              <h3 className="weight_500_size_14">Convidado</h3>
                              {users.map((element, index) => {
                                return (
                                  element?.id === elem?.guestId && (
                                    <p
                                      key={index}
                                      className="weight_500_size_14"
                                    >
                                      {element?.name}
                                    </p>
                                  )
                                );
                              })}
                            </div>
                          </section>
                        </li>
                      );
                    }
                  })}
                </ContainerUl>
                <section className="section_pointsnotes">
                  <ContainerPoints>
                    <div className="container">
                      <h2 className="weight_500_size_16">
                        Talking Points do 1:1
                      </h2>
                      <div className="row">
                        <div></div>
                      </div>
                      <ul>
                        {pointsFilter.map((elem) => {
                          return (
                            <li key={elem?.id}>
                              <input
                                type="checkbox"
                                checked={elem?.checked}
                                onChange={() =>
                                  taskChecked(
                                    elem?.id,
                                    !elem?.checked,
                                    "talkPoint"
                                  )
                                }
                              />
                              <p className="weight_400_size_16">{elem?.name}</p>
                            </li>
                          );
                        })}
                      </ul>
                      <Button
                        name={"+ Adicionar novo ponto"}
                        background={"none"}
                        color={"#476EE6"}
                        className={"weight_500_size_16"}
                      />
                    </div>
                  </ContainerPoints>
                  <ContainerNotes>
                    <div className="container">
                      <h2 className="weight_500_size_16">
                        Historico de anotações
                      </h2>
                      <div className="row">
                        <div></div>
                      </div>
                      <div className="general_input">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            createTalkNote(inputNote, talksFilter[0]?.id);
                            setInputNote("");
                          }}
                        >
                          <input
                            placeholder="Faça sua anotação"
                            className="weight_300_size_12"
                            value={inputNote}
                            onChange={(e) => setInputNote(e.target.value)}
                          />
                        </form>
                      </div>
                      <ul>
                        {notesFilter.map((elem) => {
                          const user = users.filter(
                            (elemt) => elemt?.id === elem?.userId
                          );
                          return (
                            <li key={elem.id}>
                              <div className="div_name_date">
                                <h3 className="weight_500_size_14">
                                  {user[0]?.name}
                                </h3>
                                <div className="div_date">
                                  <p className="weight_500_size_10 name">
                                    {talksFilter[0]?.name}
                                  </p>
                                  <div className="weight_500_size_10 date">
                                    <p>{talksFilter[0]?.date}</p>
                                    <p>-</p>
                                    <p>{talksFilter[0]?.hour}</p>
                                  </div>
                                </div>
                              </div>
                              <p className="weight_400_size_13 name-text">
                                {elem?.name}
                              </p>
                              <div className="row_li">
                                <div></div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </ContainerNotes>
                </section>
              </section>
            </ContainerDesktop>
          </SidebarWithHeader>
        </>
      ) : (
        <>
          <SidebarWithHeader />
          <ContainerMobile>
            <div className="general_search">
              <h1 className="weight_600_size_25">Conversas 1:1</h1>
              <button>
                <BiSearch color="#476EE6" />
              </button>
            </div>
            <div className="general_button">
              <div>
                <Button
                  background={"none"}
                  borderRadius={"100px"}
                  color={"#476EE6"}
                  className={`weight_500_size_15 ${classButtonFilterT}`}
                  name={"1:1 agendadas"}
                  onClick={() => {
                    setClassButtonFilterT("selected");
                    setClassButtonFilterF("");
                    setButtonFilter(true);
                  }}
                />

                <Button
                  background={"none"}
                  borderRadius={"100px"}
                  color={"#476EE6"}
                  className={`weight_500_size_15 ${classButtonFilterF}`}
                  name={"1:1 realizadas"}
                  onClick={() => {
                    setClassButtonFilterT("");
                    setClassButtonFilterF("selected");
                    setButtonFilter(false);
                  }}
                />
              </div>
            </div>
            <ContainerUl>
              <ModalCreateEdit />
              {talks.map((elem, i) => {
                if (!elem.checked && buttonFilter) {
                  return (
                    <li key={i}>
                      <section>
                        <input
                          type="checkbox"
                          checked={false}
                          onChange={() => taskChecked(elem.id, true, "talk")}
                        />
                        <div className="general_div">
                          <h2 className="weight_500_size_14">{elem?.name}</h2>
                          <div className="date">
                            <p className="weight_500_size_12">{elem?.date}</p>
                            <p>-</p>
                            <p className="weight_500_size_12">{elem?.hour}</p>
                          </div>
                        </div>
                        <ModalAction talk={elem} />
                      </section>
                      <div className="row">
                        <div
                          onClick={() => navigate(`/home/${elem?.id}`)}
                        ></div>
                      </div>
                      <section onClick={() => navigate(`/home/${elem?.id}`)}>
                        <div>
                          <h3 className="weight_500_size_14">Organizador</h3>
                          {users.map((element, index) => {
                            return (
                              element?.id === elem?.ownerId && (
                                <p key={index} className="weight_500_size_14">
                                  {element?.name}
                                </p>
                              )
                            );
                          })}
                        </div>
                        <div>
                          <h3 className="weight_500_size_14">Convidado</h3>
                          {users.map((element, index) => {
                            return (
                              element?.id === elem?.guestId && (
                                <p key={index} className="weight_500_size_14">
                                  {element?.name}
                                </p>
                              )
                            );
                          })}
                        </div>
                      </section>
                    </li>
                  );
                } else if (elem.checked && !buttonFilter) {
                  return (
                    <li key={i}>
                      <section>
                        <input
                          type="checkbox"
                          checked
                          onChange={() => taskChecked(elem?.id, false, "talk")}
                        />
                        <div className="general_div">
                          <h2 className="weight_500_size_14">{elem?.name}</h2>
                          <div className="date">
                            <p className="weight_500_size_12">{elem?.date}</p>
                            <p>-</p>
                            <p className="weight_500_size_12">{elem?.hour}</p>
                          </div>
                        </div>
                        <ModalAction talk={elem} />
                      </section>
                      <div className="row">
                        <div
                          onClick={() => navigate(`/home/${elem?.id}`)}
                        ></div>
                      </div>
                      <section onClick={() => navigate(`/home/${elem?.id}`)}>
                        <div>
                          <h3 className="weight_500_size_14">Organizador</h3>
                          {users.map((element, index) => {
                            return (
                              element?.id === elem?.ownerId && (
                                <p key={index} className="weight_500_size_14">
                                  {element?.name}
                                </p>
                              )
                            );
                          })}
                        </div>
                        <div>
                          <h3 className="weight_500_size_14">Convidado</h3>
                          {users.map((element, index) => {
                            return (
                              element?.id === elem?.guestId && (
                                <p key={index} className="weight_500_size_14">
                                  {element?.name}
                                </p>
                              )
                            );
                          })}
                        </div>
                      </section>
                    </li>
                  );
                }
              })}
            </ContainerUl>
          </ContainerMobile>
        </>
      )}
    </>
  );
};

export default Home;
