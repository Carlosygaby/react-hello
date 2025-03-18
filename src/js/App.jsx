import Barra from "./components/Barra";
import Card from "./components/Card";
import ContenedorFlex from "./components/ContenedorFlex";
import MiniCard from "./components/MiniCard";

const cardInformation = {
  text: "These are some of the best games in history. Personally, these games had a profound impact on me during my childhood. I'll leave you a link to an excellent page where you can see a list of the 'best games in history.' According to them, they are the Vandal boys.There you'll find the best games of all time, rated according to user opinions, Metacritic, or their analysts in order of score.",
  title: "The 4 Best Video Games In History According To Me",
  button: "Go Vandal!",
  link: "https://vandal.elespanol.com/rankings/videojuegos",
};
const games = [
  {
    img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_7/SI_N64_LegendOfZeldaOcarinaOfTime_image1600w.jpg",
    title: "The Legend of Zelda: Ocarina of Time",
    text: "The Legend of Zelda: Ocarina of Time is a 1998 action-adventure game developed by Nintendo EAD Tokyo and published by Nintendo. It is the seventh installment in The Legend of Zelda series and the first game in the Ocarina of Time series.",
    link: "https://www.nintendo.com/en-gb/Games/Nintendo-64/The-Legend-of-Zelda-Ocarina-of-Time-269536.html?srsltid=AfmBOooZdFpGW8K8VgY3cDmB9SWmaNkvkPt59XfknF1hfu4ACFa3i8OC",
  },
  {
    img: "https://images.ctfassets.net/wn7ipiv9ue5v/573sV0kiTALMbBfR1vDfTm/fcd4104d2500ccf296c2c7ad1782ebce/GTAIV_Hero_Character_1920x1080.jpg",
    title: "Grand Theft Auto IV",
    text: "Grand Theft Auto IV is a 2003 first-person shooter video game developed by Rockstar North and published by Rockstar Games. It is the fourth installment in the Grand Theft Auto series and the first game in the Grand Theft Auto IV series.",
    link: "https://store.rockstargames.com/es/game/buy-grand-theft-auto-iv",
  },
  {
    img: "https://i.ebayimg.com/images/g/-WQAAOSwPoRkYC0F/s-l1200.jpg",
    title: "Goldeneye 64",
    text: "Goldeneye 64 is a 1998 action-adventure game developed by Nintendo EAD Tokyo and published by Nintendo. It is the sixth installment in The Legend of Zelda series and the second game in the Goldeneye series.",
    link: "https://www.guiasnintendo.com/4_Nintendo_64/golden64/Goldeneye_sp/welcome.html",
  },

  {
    img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ResidentEvil4_image1600w.jpg",
    title: "Resident Evil 4",
    text: "Resident Evil 4 is a 2011 action-adventure game developed by Capcom and published by Nintendo. It is the fourth installment in the Resident Evil series and the first game in the Resident Evil 4 series.",
    link: "https://www.nintendo.com/es-es/Juegos/Wii/Resident-Evil-4-Wii-edition-282849.html",
  },
];

const generarCarta = (array) => {
  return array.map((element) => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        <MiniCard
          key={array.length}
          img={element.img}
          title={element.title}
          text={element.text}
          link={element.link}
          alt={element.title}
        ></MiniCard>
      </div>
    );
  });
};

const App = () => {
  return (
    <>
      <Barra />
      <Card
        text={cardInformation.text}
        title={cardInformation.title}
        button={cardInformation.button}
        link={cardInformation.link}
      />
      {<ContenedorFlex generar={generarCarta} array={games} />}
      <div className="container-fluid pie bg-dark text-center align-content-center text-white">
        <p>Copyrigth 2025 - Carlos</p>
      </div>
    </>
  );
};

export default App;
