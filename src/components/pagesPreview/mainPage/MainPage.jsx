import emoji1 from "../../img/emoji1.jpg";
import emoji2 from "../../img/emoji2.jpg";
import emoji3 from "../../img/emoji3.jpg";
import logo from "../../img/LOGO green.svg";
const MainPage = () => {
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
          <li>Збори</li>
          <li>Фонди</li>
          <li>Петиції</li>
          <li>Ініціативи</li>
        </ul>
        <ul>
          <li>Увійти</li>
          <li>Реєстрація</li>
        </ul>
      </div>
      <div>
        <h2>
          Ми можемо нічого не робити і залишити цю війну нашим дітям у спадок, а
          можемо згуртуватися і лишити у спадок вільну європейську державу.
        </h2>
        <div>
          <div>
            <img src={emoji1} alt="soldier" />
            <p>Військовий</p>
            <h3>Створює запит на допомогу</h3>
            <button>Створити запит</button>
          </div>
          <div>
            <img src={emoji3} alt="volunteer" />
            <p>Волонтер</p>
            <h3>Відгукується на запит та відкриває збір</h3>
            <button>Відкрити збір</button>
          </div>
          <div>
            <img src={emoji2} alt="donater" />
            <p>Донатер</p>
            <h3>Донатить та поширює</h3>
            <button>Донатити</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
