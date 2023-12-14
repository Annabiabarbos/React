import React, { useEffect, useState } from "react";
import "./ComentariosEvento.css";

import "../EventosPage/EventosPage";
import api, {
  commentaryEventResource,
  eventsResource
} from "../../Services/Service"


const ComentariosEvento = () => {

  const [idComentario , setIdComentario] = useState(null);
  const [notifyUser, setNotifyUser] = useState();

    useEffect( () => {
      loadCommentaryEvents();
    }, [eventsResource, commentaryEventResource])
    
 async function loadCommentaryEvents() {
    if(commentaryEventResource == true){
      try {
        const comentariosEvento = await api.get(commentaryEventResource)
        const comentariospositivos = await api.get (`${ComentariosEvento}/${idComentario}`)
      } catch (error) {
        setNotifyUser({
          titleNote: "Erro",
          textNote: `Não foi possivel carregar os comentários`,
          imgIcon: "danger",
          imgAlt:
            "Imagem de ilustração de aviso. Moça em frente a um símbolo de exclamação!",
          showMessage: true,
        });
      }
    }
  }

  return (
  <div>
    
  </div>)
};

export default ComentariosEvento;
