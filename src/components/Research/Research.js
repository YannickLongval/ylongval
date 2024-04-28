import './Research.css';
import Chat from './Chat/Chat';

function Research() {
  return (
    <div className="research" id="research">
        <h1>Research</h1>
        <div className="chatbox" id="chatbox">
        <Chat name="user.png">
        Tell me about Yannick Longval's research  
        </Chat>
        <Chat name="gpt.png">
        Certainly! As a <b>Generative AI Researcher</b> at the <b>Rotman School of Management</b>, Yannick Longval's research heavily focuses on the impacts of <b>Large Language Models (LLMs)</b>, such at ChatGPT, in higher education.
        </Chat>
        <Chat name="user.png">
        What do you mean by higher education?
        </Chat>
        <Chat name="gpt.png">
        The term higher education is used to respresent post-secondary studies, from institutions such as universities and colleges. Yannick's research aims to enhance higher education by leveraging LLM capabilities.
        </Chat>
        <Chat name="user.png">
        How will his research enhance higher education with LLMs?
        </Chat>
        <Chat name="gpt.png">
        The product of Yannick's research will be a collection of <b>LLM Agents</b>, which will form a unified GPT network. With the use of <b>Prompt Engineering</b>, each agent will specialize in a particular task related to higher education, such as teaching, testing, and evaluating. The network of custom GPTs will aid professors, as well as students, to enhance the learning process.
        </Chat>
        </div>
    </div>

  );
}

export default Research;
