import { useState } from "react";
import "./Botao.css";

function Seguir() {
    const [curtido, setCurtido] = useState(false); // o estado que se encontra "Curtindo"
    const [seguindo, setSeguindo] = useState(false); // o estado que se encontra "Seguindo"

    // Função para lidar com o clique no botão de curtida
    function CliqueCurtir() {
        setCurtido(!curtido); // Marca o botão como curtido
    }

    // Botão de seguir
    function CliqueSeguirUsuario() {
        setSeguindo(!seguindo); // Alterna o estado de seguir
    }

    return (
        <div className="cartao">
            <div className="curtir">
                <button 
                    onClick={CliqueCurtir} 
                    className={curtido ? "curtido" : "nao-curtido"}
                >
                    {curtido ? "Liked" : "Like"}
                </button>
            </div>
            <div className="seguir">
                <button 
                    onClick={CliqueSeguirUsuario} 
                    className={seguindo ? "seguindo" : "nao-seguindo"}
                >
                    {seguindo ? "Followed" : "Follow"}
                </button>
            </div>
        </div>
    );
}

export default Seguir;
