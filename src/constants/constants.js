export const projects = [
  {
    title: "BI - Stock Market Scraper & Technical Analysis",
    description:
      "Python Scraper that queries Yahoo Finance for latest market information for all NASDAQ tickers. For each ticker, market data is saved as .csv file on local drive. TA is applied on each Dataframe before it is exported as .csv",
    image: "/images/stock.jpg",
    icon: "/images/icons/finance.png",
    tags: ["NumPy", "Pandas", "Plotly", "ta"],
    source:
      "https://github.com/saifmdev/stock_scraper_ta/blob/main/stock_analysis.ipynb",
    visit:
      "https://colab.research.google.com/github/saifmdev/stock_scraper_ta/blob/main/stock_analysis.ipynb",
    id: 0,
  },
  {
    title: "ML - Robot Surface Predictor",
    description:
      "Regression model to predict type of surface robot is walking on. K-folds cross-validation was used to evaluate and improve model accuracy.",
    image: "/images/road_surface.png",
    icon: "/images/icons/machine-learning.png",
    tags: ["NumPy", "Pandas", "sklearn", "Seaborn"],
    source:
      "https://github.com/saifmdev/regression_robot_surface_predictor/blob/main/robot_surface_predictor.ipynb",
    visit:
      "https://colab.research.google.com/github/saifmdev/regression_robot_surface_predictor/blob/main/robot_surface_predictor.ipynb",
    id: 1,
  },
  {
    title: "ML - House Price Predictor",
    description:
      "Predicting House Prices using RandomForest Regression from scikit-learn. Train/Test Datasets were cleaned and scaled for model fitting and prediction",
    image: "/images/house_prices.jpg",
    icon: "/images/icons/machine-learning.png",
    tags: ["NumPy", "Pandas", "sklearn"],
    source:
      "https://github.com/saifmdev/regression_house_prices/blob/main/Linear_Regression.ipynb",
    visit:
      "https://colab.research.google.com/github/saifmdev/regression_house_prices/blob/main/Linear_Regression.ipynb",
    id: 2,
  },
  {
    title: "Hangman",
    description:
      "A Simple, yet extremely fun, terminal-based word game written in Python. Image result for hangman game descriptionHangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses. Guess the word right or, its game over!",
    image: "/images/hangman.jpg",
    icon: "/images/icons/gamepad.png",
    tags: ["Python"],
    source: "https://github.com/iamsaifmustaf/hangman_game",
    visit: "https://replit.com/@SaifMustaf/hangmangame",
    id: 3,
  },

  {
    title: "Pong",
    description:
      " Pong is a two-dimensional sports game that simulates table tennis.  The player controls an in-game paddle by moving it vertically across  the left or right side of the screen. They can compete against another  player controlling a second paddle on the opposing side. Players use the  paddles to hit a ball back and forth. Use UP and DOWN for right opponent, W and S for left opponent.",
    image: "/images/pong.jpg",
    icon: "/images/icons/gamepad.png",
    tags: ["Python", "tkinter"],
    source: "https://github.com/iamsaifmustaf/pong",
    visit: "https://replit.com/@SaifMustaf/pong",
    id: 4,
  },
  {
    title: "Snake",
    description:
      "Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food, trying to avoid hitting its own tail or the edges of the playing area.",
    image: "/images/snake.png",
    icon: "/images/icons/gamepad.png",
    tags: ["Python", "tkinter"],
    source: "https://github.com/iamsaifmustaf/snake_game",
    visit: "https://replit.com/@SaifMustaf/snakegame",
    id: 5,
  },
  {
    title: "Traffic Cross",
    description:
      "Imagine you are a turtle, trying to cross the highway. Show your skills by safely and smoothly crossing the highway without letting any of the cars run you over. The more levels you pass, the faster the cars move. Use UP arrow to move.",
    image: "/images/traffic.jpg",
    icon: "/images/icons/gamepad.png",
    tags: ["Python", "tkinter"],
    source: "https://github.com/iamsaifmustaf/traffic_cross",
    visit: "https://replit.com/@SaifMustaf/trafficcross",
    id: 6,
  }
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey at George Brown College, Toronto" },
  { year: 2020, text: "Graduated from George Brown College" },
  { year: 2021, text: "The Python Institute - PCAP Certified Associate Python Programmer"},
  { year: 2022, text: "Google Data Analytics Professional - Coursera" },
  { year: "Future", text: "Limitless..." },
];
