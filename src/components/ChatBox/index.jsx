import { useRef, useEffect } from 'react'; // Apenas importa os hooks que você está utilizando
import { ChatBoxContent } from './style';
import uPloadImage from '../../assets/uploadImage.svg';
import { digitacao } from './typingEffect'; // Importa a função de animação

const ChatBox = () => {
  const typingRef = useRef(null); // Cria uma referência ao elemento .eftTyping

  useEffect(() => {
    if (typingRef.current) {
      digitacao(typingRef.current); // Aplica a animação usando a referência
    }
  }, []); // O array vazio [] faz com que o useEffect rode apenas uma vez após o componente montar

  return (
    <ChatBoxContent>
      <main>
        <div className="chat-container">
          <div className="chat-body">
            <div className="chat-message">
              <p ref={typingRef} className="eftTyping">Olá! Como posso ajudar você hoje?</p>
            </div>
            <div className="chat-message user">
              Preciso de ajuda.
            </div>
          </div>
          <div className="chat-footer">
            <button className="uploadFile" title="Anexar um arquivo">
              <img src={uPloadImage} alt="Anexar arquivo" />
            </button>
            <input type="text" placeholder="Digite sua mensagem..." />
            <button>Enviar</button>
          </div>
        </div>
      </main>
    </ChatBoxContent>
  );
};

export default ChatBox;
