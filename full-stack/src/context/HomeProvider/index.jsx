import api from "../../services/api";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [talks, setTalks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [points, setPoints] = useState([]);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    const load = async () => {
      api
        .get("/talk")
        .then(({ data }) => {
          setTalks(data.talks);
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .get("/user")
        .then(({ data }) => {
          setUsers(data.users);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
      api
        .get(`/talkpoint`)
        .then(({ data }) => {
          setPoints(data.talksPoints);
        })
        .catch((error) => {
          console.log(error);
        });
      api
        .get(`/talknotes`)
        .then(({ data }) => {
          setNotes(data.talksNotes);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    load();
  }, [loading]);

  const taskChecked = async (id, boolean, type) => {
    const data = {
      checked: boolean,
    };
    if (type === "talk") {
      api
        .patch(`/talk/${id}`, data)
        .then(({ data }) => {
          setLoading(true);
          if (data.talkUpdate.checked) {
            toast.success("Conversa realizada!");
          } else {
            toast.success("Conversa de volta para agenda!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api
        .patch(`/talkpoint/${id}`, data)
        .then(() => {
          setLoading(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const createTalkNote = async (note, id) => {
    const data = {
      name: note,
      talkId: id,
    };

    api
      .post(`/talknotes`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTalk = async (id) => {
    api
      .delete(`/talk/${id}`)
      .then(() => {
        toast.success("Conversa excluída com sucesso!");
        setLoading(true);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  const deleteTalkPoint = async (id) => {
    api
      .delete(`/talkPoint/${id}`)
      .then(() => {
        toast.success("Talking point excluído com sucesso!");
        setLoading(true);
      })
      .catch((error) => console.log(error));
  };

  const createEditTalk = async (data, talkId, talkPoint, edit) => {
    if (edit) {
      data.date === "" && delete data.date;
      data.hour === "" && delete data.hour;
      data.name === "" && delete data.name;
      api
        .patch(`/talk/${talkId}`, data)
        .then(() => {
          setLoading(true);
          toast.success("Conversa editada com sucesso!");
        })
        .catch((error) => {
          toast.error("Ops, algo deu errado!");
        });
    } else {
      data.date === "" && delete data.date;
      data.hour === "" && delete data.hour;
      data.name === "" && delete data.name;
      api
        .post(`/talk`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          toast.success("Conversa criada com sucesso!");
          setLoading(true);
        })
        .catch((error) => {
          toast.error("Ops, preencha todos os campos!");
        });
    }

    if (talkPoint !== "") {
      if (talkPoint !== undefined) {
        const obj = {
          name: talkPoint,
          talkId: talkId,
        };
        api
          .post(`/talkpoint`, obj)
          .then(() => {
            setLoading(true);
            toast.success("Talking Point criado com sucesso!");
          })
          .catch((error) => {
            toast.error("Ops, algo deu errado!");
          });
      }
    }
  };

  return (
    <HomeContext.Provider
      value={{
        talks,
        setTalks,
        users,
        setUsers,
        taskChecked,
        points,
        setPoints,
        notes,
        setNotes,
        createTalkNote,
        deleteTalk,
        handleSubmit,
        reset,
        register,
        errors,
        deleteTalkPoint,
        createEditTalk,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
