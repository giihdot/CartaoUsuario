import { useState } from "react";
import "./Botao.css";

function Seguir() {
    const [curtido, setCurtido] = useState(false);
    const [seguindo, setSeguindo] = useState(false); 

    // Função para lidar com o clique no botão de curtida
    function CliqueSeguir() {
        setCurtido(true); // Marca o botão como curtido
    }

    // Botão de seguir
    function CliqueSeguirUsuario() {
        setSeguindo(!seguindo); // Alterna o estado de seguir
    }

    return (
        <div className="cartao">
            <div className="curtir">
                <button 
                    onClick={CliqueSeguir} 
                    className={curtido ? "curtido" : "nao-curtido"}
                >
                    Curtir
                </button>
            </div>
            <div className="seguir">
                <button 
                    onClick={CliqueSeguirUsuario} 
                    className={seguindo ? "seguindo" : "nao-seguindo"}
                >
                    {seguindo ? "Seguindo" : "Seguir"}
                </button>
            </div>
        </div>
    );
}

export default Seguir;
