import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HomeContext } from "../../context/HomeProvider";
import ModalAction from "../../components/ModalAction";
import {
  ContainerGeral,
  ContainerLi,
  ContainerPoints,
  Header,
  ContainerNotes,
} from "./style";
import { BiArrowBack } from "react-icons/bi";
import Button from "../../components/Button";

const TalkDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [inputNote, setInputNote] = useState("");

  const { talks, users, taskChecked, points, notes, createTalkNote } =
    useContext(HomeContext);

  const talk = talks.filter((elem) => elem.id == id);
  const point = points.filter((elem) => elem.talkId == id);
  const note = notes.filter((elem) => elem.talkId == id);

  return (
    <>
      <Header>
        <BiArrowBack
          color="#476EE6"
          onClick={() => navigate("/home")}
          cursor={"pointer"}
        />
        <h1 className="weight_500_size_18">Detalhes da 1:1</h1>
      </Header>
      <ContainerGeral>
        <ContainerLi>
          <li key={talk[0]?.id}>
            <section>
              <input
                type="checkbox"
                checked={talk[0]?.checked}
                onChange={() =>
                  taskChecked(talk[0]?.id, !talk[0]?.checked, "talk")
                }
              />
              <div className="general_div">
                <h2 className="weight_500_size_14">{talk[0]?.name}</h2>
                <div className="date">
                  <p className="weight_500_size_12">{talk[0]?.date}</p>
                  <p>-</p>
                  <p className="weight_500_size_12">{talk[0]?.hour}</p>
                </div>
              </div>
              <ModalAction talk={talk[0]} />
            </section>
            <div className="row">
              <div></div>
            </div>
            <section>
              <div>
                <h3 className="weight_500_size_14">Organizador</h3>
                {users.map((element, index) => {
                  return (
                    element.id === talk[0]?.ownerId && (
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
                    element.id === talk[0]?.guestId && (
                      <p key={index} className="weight_500_size_14">
                        {element?.name}
                      </p>
                    )
                  );
                })}
              </div>
            </section>
          </li>
        </ContainerLi>
        <ContainerPoints>
          <div className="container">
            <h2 className="weight_500_size_16">Talking Points do 1:1</h2>
            <div className="row">
              <div></div>
            </div>
            <ul>
              {point.map((elem) => {
                return (
                  <li key={elem?.id}>
                    <input
                      type="checkbox"
                      checked={elem?.checked}
                      onChange={() =>
                        taskChecked(elem?.id, !elem?.checked, "talkPoint")
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
            <h2 className="weight_500_size_16">Historico de anotações</h2>
            <div className="row">
              <div></div>
            </div>
            <div className="general_input">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createTalkNote(inputNote, id);
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
              {note.map((elem) => {
                const user = users.filter(
                  (elemt) => elemt?.id === elem?.userId
                );
                return (
                  <li key={elem.id}>
                    <h3 className="weight_500_size_14">{user[0]?.name}</h3>
                    <div className="div_name_date">
                      <p className="weight_500_size_10 name">{talk[0]?.name}</p>
                      <div className="weight_500_size_10 date">
                        <p>{talk[0]?.date}</p>
                        <p>-</p>
                        <p>{talk[0]?.hour}</p>
                      </div>
                    </div>
                    <p className="weight_400_size_13 name-text">{elem?.name}</p>
                    <div className="row_li">
                      <div></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </ContainerNotes>
      </ContainerGeral>
    </>
  );
};

export default TalkDetail;
