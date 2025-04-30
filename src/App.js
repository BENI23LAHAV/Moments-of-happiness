import React, { useState, useEffect } from "react";
import { Heart, Clock, Info } from "lucide-react";

// רכיב לבבות מרחפים
const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // יצירת מערך של לבבות במיקומים רנדומליים
    const generateHearts = () => {
      const newHearts = [];
      const heartCount = Math.floor(Math.random() * 5) + 1; // מספר לבבות רנדומלי בכל פעם

      for (let i = 0; i < heartCount; i++) {
        newHearts.push({
          id: Date.now() + i,
          left: Math.random() * 100, // מיקום אופקי
          size: Math.random() * 30 + 10, // גודל רנדומלי
          opacity: Math.random() * 0.7 + 0.3, // שקיפות רנדומלית
          duration: Math.random() * 15 + 10, // משך האנימציה
          delay: Math.random() * 5, // עיכוב התחלת האנימציה
          rotation: Math.random() * 40 - 20, // סיבוב רנדומלי
        });
      }

      setHearts((prevHearts) => [...prevHearts, ...newHearts]);
    };

    // יצירת לבבות חדשים כל 3 שניות
    const interval = setInterval(generateHearts, 3000);
    generateHearts(); // יצירת לבבות התחלתיים

    // ניקוי לבבות ישנים כל 20 שניות
    const cleanupInterval = setInterval(() => {
      setHearts((prevHearts) => {
        const now = Date.now();
        return prevHearts.filter((heart) => now - heart.id < 20000); // שמירת לבבות מ-20 השניות האחרונות
      });
    }, 20000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            bottom: "-50px",
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: heart.opacity,
            transform: `rotate(${heart.rotation}deg)`,
            color: "#e91e63",
            zIndex: 0,
            animation: `float ${heart.duration}s ease-in forwards ${heart.delay}s`,
          }}>
          <Heart fill="#e91e63" />
        </div>
      ))}
    </>
  );
};

// מערך השאלות
const cardsArray = [
  {
    id: 1,
    question:
      "מה היית עושה אם היית זוכה בטיול חלומות לכל מקום בעולם לאן היית נוסע?",
    isRead: false,
  },
  {
    id: 2,
    question: "איזה 3 דברים היית לוקח איתך לאי בודד?",
    isRead: false,
  },
  {
    id: 3,
    question: "מה היית עושה אם היית מקבל הזדמנות להקים עסק משלך?",
    isRead: false,
  },
  {
    id: 4,
    question: "מה היית עושה אם היה לך מספיק כסף לכל חייך ונמאס לך כבר לבלות?",
    isRead: false,
  },
  {
    id: 5,
    question: "מה היית עושה אם היית פוגש את עצמך כילד מה היית אומר לו?",
    isRead: false,
  },
  {
    id: 6,
    question: "מה היית עושה אם היית פוגש את האדם האהוב עליך ביותר שנפטר?",
    isRead: false,
  },
  {
    id: 7,
    question:
      "מה היית עושה עם הזמן אם היית מקבל הזדמנות לחיות ללא כל צורך בשינה?",
    isRead: false,
  },
  {
    id: 8,
    question: "מה היית עושה אם היית מגלה מכונה שיכולה להגשים לך כל משאלה?",
    isRead: false,
  },
  {
    id: 9,
    question: "מה היית עושה אם היית יכול לשנות את העולם למקום טוב יותר?",
    isRead: false,
  },
  {
    id: 10,
    question: "מה היית עושה אם היית יכול לשנות את עצמך איזה תכונה היית משנה?",
    isRead: false,
  },
  {
    id: 11,
    question: "מה היית רוצה ללמוד ולדעת?",
    isRead: false,
  },
  {
    id: 12,
    question: "איזה מחשבה מפחידה אותך ואיך היית רוצה לפתור אותה?",
    isRead: false,
  },
  {
    id: 13,
    question: "מה גורם לך להרגיש גל מוטיבציה?",
    isRead: false,
  },
  {
    id: 14,
    question: "מה עוזר לך להרגע בזמן סערת רגשות?",
    isRead: false,
  },
  {
    id: 15,
    question: "איזה רגש היית רוצה להרגיש יותר ואיזה רגש היית רוצה להרגיש פחות?",
    isRead: false,
  },
  {
    id: 16,
    question: "מה המקצוע שהכי לא מתאים לך ולמה?",
    isRead: false,
  },
  {
    id: 17,
    question: "מה אתה אוהב לעשות בשעות הפנאי?",
    isRead: false,
  },
  {
    id: 18,
    question: "מה הדבר שהכי מרגיש אותך שעושים למענך?",
    isRead: false,
  },
  {
    id: 19,
    question: "מה יותר בלתי נסבל לחיות בעולם ללא כלפון או ללא מיזוג אוויר?",
    isRead: false,
  },
  {
    id: 20,
    question: "מהו הדבר המצחיק ביותר שקרה לך בעבודה/לימודים/כולל?",
    isRead: false,
  },
  {
    id: 21,
    question: "מה היית עושה אם היית זוכה בהגרלה על מיליון שקל?",
    isRead: false,
  },
  {
    id: 22,
    question: "מה היית עושה אם היית הופך לבלתי נראה ליום אחד?",
    isRead: false,
  },
  {
    id: 23,
    question: "מה היית עושה אם היית מקבל הזדמנות להקים עמותת חסד משלך?",
    isRead: false,
  },
  {
    id: 24,
    question: "מה היית עושה אם היית מקבל הזדמנות להיות ראש ממשלה ליום אחד?",
    isRead: false,
  },
  {
    id: 25,
    question:
      "מה היית עושה אם היית מקבל הזדמנות לחזור בזמן ולשנות דבר אחד בחייך?",
    isRead: false,
  },
  {
    id: 26,
    question: "איך היית רוצה לראות את עצמך בעוד 10 שנים?",
    isRead: false,
  },
  {
    id: 27,
    question: "איזה חישוב אישי גורם לך להרגיש סיפוק?",
    isRead: false,
  },
  {
    id: 28,
    question: "מה הוא הדבר שאתה מתגעגע אליו מהילדות? (משחק, משהו, אוכל)",
    isRead: false,
  },
  {
    id: 29,
    question: "איך אתה מדמיין את המשפחה שלך כשתהיה בן 80?",
    isRead: false,
  },
  {
    id: 30,
    question: "איזה משהו טיפשי, טעות או פדיחה עשית פעם?",
    isRead: false,
  },
];

const App = () => {
  // מצבים
  const [gameStage, setGameStage] = useState("welcome"); // welcome, players, game, gameOver
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [cards, setCards] = useState([...cardsArray]);
  const [remainingCards, setRemainingCards] = useState(cards.length);
  const [animateCard, setAnimateCard] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  // טיימר
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timerActive && timeLeft === 0) {
      // כאשר הזמן נגמר
      setTimerActive(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timerActive, timeLeft]);

  // פונקציה להוספת שחקן
  const addPlayer = () => {
    if (playerName.trim() !== "") {
      setPlayers([...players, playerName.trim()]);
      setPlayerName("");
    }
  };

  // פונקציה להתחלת המשחק
  const startGame = () => {
    if (players.length >= 2) {
      // ערבוב השחקנים
      const shuffledPlayers = [...players];
      for (let i = shuffledPlayers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlayers[i], shuffledPlayers[j]] = [
          shuffledPlayers[j],
          shuffledPlayers[i],
        ];
      }
      setPlayers(shuffledPlayers);
      setGameStage("game");
      drawNewCard();
    }
  };

  // פונקציה לבחירת כרטיס חדש שעוד לא נקרא
  const drawNewCard = () => {
    const unreadCards = cards.filter((card) => !card.isRead);
    if (unreadCards.length === 0) {
      setGameStage("gameOver");
      return;
    }

    const randomIndex = Math.floor(Math.random() * unreadCards.length);
    const selectedCard = unreadCards[randomIndex];

    // עדכון הכרטיס כנקרא
    const updatedCards = cards.map((card) =>
      card.id === selectedCard.id ? { ...card, isRead: true } : card
    );

    setAnimateCard(false);
    setTimeout(() => {
      setCurrentQuestion(selectedCard);
      setCards(updatedCards);
      setRemainingCards(unreadCards.length - 1);
      setAnimateCard(true);
      // איפוס והפעלת הטיימר
      setTimeLeft(60);
      setTimerActive(true);
    }, 300);
  };

  // פונקציה למעבר לשחקן הבא
  const nextPlayer = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    setTimerActive(false); // עצירת הטיימר
    drawNewCard();
  };

  // פונקציה לאיפוס המשחק
  const resetGame = () => {
    setCards([...cardsArray.map((card) => ({ ...card, isRead: false }))]);
    setRemainingCards(cardsArray.length);
    setCurrentPlayerIndex(0);
    setGameStage("players");
  };

  // סגנונות
  const styles = {
    app: {
      maxWidth: "100%",
      minHeight: "100vh",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Rubik, Arial, sans-serif",
      background: "linear-gradient(135deg, #fff5f7 0%, #fce4ec 100%)",
      color: "#333",
      direction: "rtl",
    },
    heartsBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      opacity: 0.05,
      background:
        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c-9-9-15-9-15-9 0-6 6-9 6-9s4 4 9 3c0 0 0-5 6-5s6 5 6 5c5 1 9-3 9-3s6 3 6 9c0 0-6 0-15 9-1 1-3 2-6 0-3 2-5 1-6 0z' fill='%23e91e63' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
    },
    welcomeScreen: {
      background: "#fff9fa",
      borderRadius: "20px",
      padding: "40px",
      textAlign: "center",
      boxShadow: "0 10px 20px rgba(233, 30, 99, 0.15)",
      width: "90%",
      maxWidth: "600px",
      position: "relative",
      zIndex: 2,
    },
    h1: {
      color: "#e91e63",
      fontSize: "32px",
      marginBottom: "20px",
    },
    heartIcon: {
      margin: "20px 0",
    },
    welcomeP: {
      fontSize: "18px",
      marginBottom: "30px",
      color: "#8e24aa",
    },
    startButton: {
      background: "#e91e63",
      color: "white",
      border: "none",
      padding: "15px 30px",
      fontSize: "18px",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "bold",
      boxShadow: "0 5px 15px rgba(233, 30, 99, 0.3)",
    },
    playersScreen: {
      background: "#fff9fa",
      borderRadius: "20px",
      padding: "30px",
      width: "90%",
      maxWidth: "600px",
      textAlign: "center",
      boxShadow: "0 10px 20px rgba(233, 30, 99, 0.15)",
      position: "relative",
      zIndex: 2,
    },
    addPlayerForm: {
      display: "flex",
      marginBottom: "20px",
    },
    playerInput: {
      flex: 1,
      padding: "12px 15px",
      border: "2px solid #ffcdd2",
      borderRadius: "50px 0 0 50px",
      fontSize: "16px",
      outline: "none",
    },
    addButton: {
      background: "#e91e63",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "0 50px 50px 0",
      cursor: "pointer",
      fontWeight: "bold",
    },
    playersList: {
      textAlign: "right",
      margin: "20px 0",
      padding: "15px",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
    },
    playersListH3: {
      color: "#8e24aa",
      marginBottom: "10px",
    },
    playerListUl: {
      listStyle: "none",
      padding: 0,
    },
    playerItem: {
      padding: "10px 0",
      borderBottom: "1px solid #ffcdd2",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    removeButton: {
      background: "none",
      border: "none",
      color: "#999",
      fontSize: "20px",
      cursor: "pointer",
    },
    startGameContainer: {
      marginTop: "30px",
    },
    startGameButton: {
      background: "#e91e63",
      color: "white",
      border: "none",
      padding: "15px 30px",
      fontSize: "18px",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "bold",
      width: "100%",
      boxShadow: "0 5px 15px rgba(233, 30, 99, 0.3)",
    },
    startGameButtonDisabled: {
      background: "#cccccc",
      cursor: "not-allowed",
      boxShadow: "none",
      color: "white",
      border: "none",
      padding: "15px 30px",
      fontSize: "18px",
      borderRadius: "50px",
      width: "100%",
      fontWeight: "bold",
    },
    playersHint: {
      color: "#999",
      marginTop: "10px",
      fontSize: "14px",
    },
    gameScreen: {
      width: "90%",
      maxWidth: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    },
    gameHeader: {
      width: "100%",
      textAlign: "center",
      marginBottom: "30px",
      background: "#fff9fa",
      padding: "20px",
      borderRadius: "20px",
      boxShadow: "0 10px 20px rgba(233, 30, 99, 0.15)",
    },
    h2: {
      color: "#c2185b",
      marginBottom: "10px",
    },
    currentPlayer: {
      color: "#8e24aa",
      fontWeight: "bold",
    },
    gameInfo: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    cardsCount: {
      background: "#ffcdd2",
      color: "#c2185b",
      padding: "5px 15px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "500",
    },
    cardContainer: {
      width: "100%",
      minHeight: "300px",
      marginBottom: "30px",
      transition: "transform 0.5s ease, opacity 0.5s ease",
    },
    animateIn: {
      transform: "rotateY(0)",
      opacity: 1,
    },
    animateOut: {
      transform: "rotateY(90deg)",
      opacity: 0,
    },
    questionCard: {
      width: "100%",
      height: "300px",
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 10px 20px rgba(233, 30, 99, 0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px",
      position: "relative",
      overflow: "hidden",
    },
    cardContent: {
      zIndex: 1,
      textAlign: "center",
    },
    questionText: {
      fontSize: "24px",
      lineHeight: 1.5,
      fontWeight: "500",
      color: "#333",
    },
    nextButton: {
      background: "#e91e63",
      color: "white",
      border: "none",
      padding: "15px 30px",
      fontSize: "18px",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "bold",
      boxShadow: "0 5px 15px rgba(233, 30, 99, 0.3)",
    },
    gameOverScreen: {
      background: "#fff9fa",
      borderRadius: "20px",
      padding: "40px",
      textAlign: "center",
      boxShadow: "0 10px 20px rgba(233, 30, 99, 0.15)",
      width: "90%",
      maxWidth: "600px",
      position: "relative",
      zIndex: 2,
    },
    resetButton: {
      background: "#e91e63",
      color: "white",
      border: "none",
      padding: "15px 30px",
      fontSize: "18px",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "bold",
      boxShadow: "0 5px 15px rgba(233, 30, 99, 0.3)",
    },
    homeButton: {
      background: "none",
      color: "#c2185b",
      border: "2px solid #e91e63",
      padding: "10px 20px",
      borderRadius: "50px",
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "20px",
      position: "relative",
      zIndex: 2,
    },
  };

  // רנדור הרכיב
  return (
    <div style={styles.app}>
      <div style={styles.heartsBg}></div>
      <FloatingHearts />

      {/* מסך פתיחה */}
      {gameStage === "welcome" && (
        <div style={styles.welcomeScreen}>
          <h1 style={styles.h1}>משחק רגעים של אושר</h1>
          <div style={styles.heartIcon}>
            <Heart size={80} color="#e91e63" fill="#e91e63" />
          </div>
          <p style={styles.welcomeP}>משחק שאלות לחיזוק הקשר הזוגי</p>
          <button
            style={styles.startButton}
            onClick={() => setGameStage("players")}>
            בואו נתחיל!
          </button>
          <button
            style={styles.infoButton}
            onClick={() => setShowInstructions(true)}>
            <Info size={18} />
            <span style={{ marginRight: "5px" }}>הוראות המשחק</span>
          </button>
        </div>
      )}

      {/* חלון הוראות */}
      {showInstructions && (
        <div
          style={styles.instructionsOverlay}
          onClick={() => setShowInstructions(false)}>
          <div
            style={styles.instructionsModal}
            onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={() => setShowInstructions(false)}>
              ×
            </button>
            <h2 style={styles.instructionsTitle}>הוראות משחק רגעים של אושר</h2>

            <div style={styles.instructionsSection}>
              <h3 style={styles.instructionsHeading}>מטרת המשחק</h3>
              <p style={styles.instructionsText}>
                התחברו האחד לשניה, הכניסו רוח רעננה לזוגיות, תגלו אחד את השניה
                מחדש ותעמיקו את השיח ביניכם.
              </p>
            </div>

            <div style={styles.instructionsSection}>
              <h3 style={styles.instructionsHeading}>הוראות הכנה</h3>
              <p style={styles.instructionsText}>
                הכינו את האווירה - סופגניות, חטיפים, שתייה או כל דבר שיעשה לכם
                נעים.
              </p>
              <p style={styles.instructionsText}>
                הוסיפו לפחות שני שחקנים למשחק.
              </p>
            </div>

            <div style={styles.instructionsSection}>
              <h3 style={styles.instructionsHeading}>איך משחקים</h3>
              <p style={styles.instructionsText}>
                1. המשחק יבחר באופן אקראי את סדר השחקנים.
              </p>
              <p style={styles.instructionsText}>
                2. בכל תור תוצג שאלה אקראית לשחקן הנוכחי.
              </p>
              <p style={styles.instructionsText}>
                3. לשחקן יש דקה לענות על השאלה בצורה כנה ופתוחה.
              </p>
              <p style={styles.instructionsText}>
                4. בסיום התשובה, לחצו על "תור הבא" כדי לעבור לשחקן הבא.
              </p>
              <p style={styles.instructionsText}>
                5. המשחק ממשיך עד שכל השאלות נשאלו.
              </p>
            </div>

            <div style={styles.instructionsSection}>
              <h3 style={styles.instructionsHeading}>טיפים</h3>
              <p style={styles.instructionsText}>- ענו בכנות ובפתיחות.</p>
              <p style={styles.instructionsText}>
                - הקשיבו לתשובות של השותף/ה שלכם.
              </p>
              <p style={styles.instructionsText}>
                - אל תשפטו את התשובות של האחר.
              </p>
              <p style={styles.instructionsText}>
                - שתפו רגשות וחלומות וצרו יחד זכרונות מתוקים!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* מסך הוספת שחקנים */}
      {gameStage === "players" && (
        <div style={styles.playersScreen}>
          <h1 style={styles.h1}>הוסיפו שחקנים</h1>
          <div style={styles.addPlayerForm}>
            <input
              style={styles.playerInput}
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="שם השחקן/ית"
              onKeyDown={(e) => e.key === "Enter" && addPlayer()}
            />
            <button style={styles.addButton} onClick={addPlayer}>
              הוסף
            </button>
          </div>

          {players.length > 0 && (
            <div style={styles.playersList}>
              <h3 style={styles.playersListH3}>שחקנים:</h3>
              <ul style={styles.playerListUl}>
                {players.map((player, index) => (
                  <li key={index} style={styles.playerItem}>
                    {player}
                    <button
                      style={styles.removeButton}
                      onClick={() =>
                        setPlayers(players.filter((_, i) => i !== index))
                      }>
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={styles.startGameContainer}>
            <button
              style={
                players.length < 2
                  ? styles.startGameButtonDisabled
                  : styles.startGameButton
              }
              disabled={players.length < 2}
              onClick={startGame}>
              התחילו לשחק! ({players.length}/2+)
            </button>
            {players.length < 2 && (
              <p style={styles.playersHint}>יש להוסיף לפחות 2 שחקנים</p>
            )}
          </div>

          <button
            style={styles.infoButton}
            onClick={() => setShowInstructions(true)}>
            <Info size={18} />
            <span style={{ marginRight: "5px" }}>הוראות המשחק</span>
          </button>
        </div>
      )}

      {/* מסך המשחק */}
      {gameStage === "game" && (
        <div style={styles.gameScreen}>
          <div style={styles.gameHeader}>
            <h2 style={styles.h2}>
              תור של:{" "}
              <span style={styles.currentPlayer}>
                {players[currentPlayerIndex]}
              </span>
            </h2>
            <div style={styles.gameInfo}>
              <span style={styles.cardsCount}>
                <Heart size={16} color="#c2185b" fill="#c2185b" />
                נותרו {remainingCards} שאלות
              </span>
              <span
                style={{
                  ...styles.timer,
                  ...(timeLeft <= 30 && timeLeft > 10
                    ? styles.timerWarning
                    : {}),
                  ...(timeLeft <= 10 ? styles.timerDanger : {}),
                }}>
                <Clock
                  size={16}
                  color={
                    timeLeft <= 10
                      ? "#c62828"
                      : timeLeft <= 30
                      ? "#ef6c00"
                      : "#2e7d32"
                  }
                />
                {Math.floor(timeLeft / 60)}:
                {String(timeLeft % 60).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            style={{
              ...styles.cardContainer,
              ...(animateCard ? styles.animateIn : styles.animateOut),
            }}>
            {currentQuestion && (
              <div style={styles.questionCard}>
                <div style={styles.cardContent}>
                  <p style={styles.questionText}>{currentQuestion.question}</p>
                </div>
              </div>
            )}
          </div>

          <button style={styles.nextButton} onClick={nextPlayer}>
            תור הבא
          </button>
        </div>
      )}

      {/* מסך סיום המשחק */}
      {gameStage === "gameOver" && (
        <div style={styles.gameOverScreen}>
          <h1 style={styles.h1}>המשחק הסתיים!</h1>
          <p style={styles.welcomeP}>עניתם על כל השאלות</p>

          <div style={styles.heartIcon}>
            <Heart size={80} color="#e91e63" fill="#e91e63" />
          </div>

          <button style={styles.resetButton} onClick={resetGame}>
            שחקו שוב
          </button>
        </div>
      )}

      {/* כפתור חזרה למסך הראשי */}
      {(gameStage === "players" ||
        gameStage === "game" ||
        gameStage === "gameOver") && (
        <button
          style={styles.homeButton}
          onClick={() => {
            setGameStage("welcome");
            setPlayers([]);
            setCards([
              ...cardsArray.map((card) => ({ ...card, isRead: false })),
            ]);
            setRemainingCards(cardsArray.length);
          }}>
          חזרה למסך הראשי
        </button>
      )}

      {/* סגנונות גלובליים לאנימציות */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(20deg); opacity: 0; }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `,
        }}
      />
    </div>
  );
};

export default App;
