import { useCallback, useEffect, useRef, useState } from 'react';

import DropButton from '../../../assets/tetris/downButton.png';
import ExitButton from '../../../assets/tetris/exitButton.png';
import LeftButton from '../../../assets/tetris/leftButton.png';
import PauseButton from '../../../assets/tetris/pauseButton.png';
import PlayButton from '../../../assets/tetris/playButton.png';
import RightButton from '../../../assets/tetris/rightButton.png';
import RotateButton from '../../../assets/tetris/rotateButton.png';
import animateClearedRows from '../utils/tetris/animateClearedRows';
import RepeatButton from '../utils/tetris/repeatButton';
import '../utils/tetris/rowClearAnimations.css';
import LEVEL_COLOR_THEMES from '../utils/tetris/tetrominoColors';

// --- Tetris constants and helpers ---
const STAGE_WIDTH = 10;
const STAGE_HEIGHT = 20;

const TETROMINOS = {
  0: { shape: [[0]] },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0],
    ],
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
  },
};
const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const rand = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[rand];
};
const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    Array.from(Array(STAGE_WIDTH), () => [0, 'clear'])
  );
const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

// Overlay the player's tetromino on the stage for rendering
function getDisplayStage(stage, player) {
  // Deep copy the stage
  const displayStage = stage.map((row) => row.map((cell) => [...cell]));
  // Overlay the player's tetromino
  player.tetromino.forEach((row, y) => {
    row.forEach((value, x) => {
      if (
        value !== 0 &&
        player.pos.y + y >= 0 &&
        player.pos.y + y < STAGE_HEIGHT &&
        player.pos.x + x >= 0 &&
        player.pos.x + x < STAGE_WIDTH
      ) {
        displayStage[player.pos.y + y][player.pos.x + x] = [value, 'clear'];
      }
    });
  });
  return displayStage;
}

// --- Main App ---
export default function Tetris() {
  // Responsive cell size based on parent container
  const containerRef = useRef(null);

  // Game state
  const [stage, setStage] = useState(createStage());
  const [player, setPlayer] = useState({
    pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const currentTheme = LEVEL_COLOR_THEMES[Math.min(level, 29)];

  // --- Movement helpers using functional updates ---
  const movePlayer = (dir) => {
    setPlayer((prev) => {
      if (!checkCollision(prev, stage, { x: dir, y: 0 })) {
        return {
          ...prev,
          pos: { x: prev.pos.x + dir, y: prev.pos.y },
        };
      }
      return prev;
    });
  };

  const rotatePlayer = () => {
    setPlayer((prev) => {
      const rotate = (matrix) =>
        matrix[0].map((_, i) => matrix.map((row) => row[i])).reverse();
      const rotated = rotate(prev.tetromino);
      const newPlayer = { ...prev, tetromino: rotated };
      if (!checkCollision(newPlayer, stage, { x: 0, y: 0 })) {
        return newPlayer;
      }
      return prev;
    });
  };

  const softDrop = () => {
    setPlayer((prev) => {
      if (!checkCollision(prev, stage, { x: 0, y: 1 })) {
        return {
          ...prev,
          pos: { x: prev.pos.x, y: prev.pos.y + 1 },
        };
      }
      return prev;
    });
  };

  const hardDrop = () => {
    setPlayer((prev) => {
      let tempPlayer = { ...prev };
      while (!checkCollision(tempPlayer, stage, { x: 0, y: 1 })) {
        tempPlayer = {
          ...tempPlayer,
          pos: { ...tempPlayer.pos, y: tempPlayer.pos.y + 1 },
        };
      }
      return tempPlayer;
    });
    setTimeout(() => drop(), 0); // lock piece and spawn next
  };

  // Drop
  const drop = useCallback(() => {
    setPlayer((prevPlayer) => {
      if (!checkCollision(prevPlayer, stage, { x: 0, y: 1 })) {
        return {
          ...prevPlayer,
          pos: { x: prevPlayer.pos.x, y: prevPlayer.pos.y + 1 },
        };
      } else {
        // Merge
        const newStage = stage.map((row) =>
          row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
        );
        prevPlayer.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0) {
              const px = x + prevPlayer.pos.x;
              const py = y + prevPlayer.pos.y;
              if (py >= 0 && py < STAGE_HEIGHT && px >= 0 && px < STAGE_WIDTH) {
                newStage[py][px] = [value, 'merged'];
              }
            }
          });
        });

        // Sweep rows
        let cleared = 0;
        const sweptStage = newStage.reduce((acc, row) => {
          if (row.every((cell) => cell[0] !== 0)) {
            cleared += 1;
            acc.unshift(
              Array.from({ length: STAGE_WIDTH }, () => [0, 'clear'])
            );
          } else {
            acc.push(row);
          }
          return acc;
        }, []);

        // Trigger animation for row clear
        if (cleared > 0 && containerRef.current) {
          animateClearedRows(cleared, containerRef);
        }

        // Update stats
        setScore(
          (prev) => prev + [0, 40, 100, 300, 1200][cleared] * (level + 1)
        );
        setRows((prev) => prev + cleared);
        setLevel(Math.floor((rows + cleared) / 10));
        setStage(sweptStage);

        // Prepare next tetromino
        const next = randomTetromino().shape;
        const newPlayer = {
          pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
          tetromino: next,
          collided: false,
        };

        // Check for game over
        if (checkCollision(newPlayer, sweptStage, { x: 0, y: 0 })) {
          setGameOver(true);
          setDropTime(null);
          setGameStarted(false);
          return prevPlayer;
        }

        return newPlayer;
      }
    });
  }, [stage, level, rows]);

  // Drop interval
  useEffect(() => {
    if (gameStarted && !gameOver) {
      setDropTime(1000 / (level + 1) + 200);
    }
  }, [level, gameStarted, gameOver]);
  useEffect(() => {
    if (dropTime && gameStarted && !gameOver) {
      const interval = setInterval(() => {
        drop();
      }, dropTime);
      return () => clearInterval(interval);
    }
  }, [dropTime, drop, gameStarted, gameOver]);

  // Controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver) return;
      if (e.key === 'ArrowLeft') movePlayer(-1);
      if (e.key === 'ArrowRight') movePlayer(1);
      if (e.key === 'ArrowDown') softDrop();
      if (e.key === 'ArrowUp' || e.key === 'x' || e.key === 'X') rotatePlayer();
      if (e.key === ' ') {
        e.preventDefault();
        hardDrop();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, gameStarted, stage]);

  // Start game
  const startGame = () => {
    setStage(createStage());
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
    setScore(0);
    setRows(0);
    setLevel(0);
    setGameOver(false);
    setGameStarted(true);
    setDropTime(1000);
  };

  // On-screen controls
  const handleUnpauseAnd = (fn) => {
    if (dropTime === null && gameStarted && !gameOver)
      setDropTime(1000 / (level + 1) + 200);
    fn();
  };

  const controls = (
    <div
      style={{
        display: 'flex',
        height: '5rem',
        gap: 8,
        justifyContent: 'center',
        marginBottom: '1rem',
      }}
    >
      <RepeatButton
        onClick={() => handleUnpauseAnd(() => movePlayer(-1))}
        className="control"
        style={{
          gridColumn: 1,
          gridRow: 1,
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Move Left"
      >
        <img
          src={LeftButton}
          alt="Move Left"
          style={{ width: '60px', height: '60px', display: 'block' }}
        />
      </RepeatButton>
      <RepeatButton
        onClick={() => handleUnpauseAnd(softDrop)}
        className="control"
        style={{
          gridColumn: 2,
          gridRow: 1,
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Move Down"
      >
        <img
          src={DropButton}
          alt="Move Down"
          style={{ width: '60px', height: '60px', display: 'block' }}
        />
      </RepeatButton>
      <RepeatButton
        onClick={() => handleUnpauseAnd(rotatePlayer)}
        className="control"
        style={{
          gridColumn: 3,
          gridRow: 1,
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Rotate"
      >
        <img
          src={RotateButton}
          alt="Rotate Right"
          style={{ width: '60px', height: '60px', display: 'block' }}
        />
      </RepeatButton>
      <RepeatButton
        onClick={() => handleUnpauseAnd(() => movePlayer(1))}
        className="control"
        style={{
          gridColumn: 4,
          gridRow: 1,
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Move Right"
      >
        <img
          src={RightButton}
          alt="Move Right"
          style={{ width: '60px', height: '60px', display: 'block' }}
        />
      </RepeatButton>
    </div>
  );

  // Render
  const displayStage = getDisplayStage(stage, player);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#222',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* Stage */}
      <div
        style={{
          flex: '1 1 auto',
          display: 'grid',
          gridTemplateRows: `repeat(${STAGE_HEIGHT}, 1fr)`,
          gridTemplateColumns: `repeat(${STAGE_WIDTH}, 1fr)`,
          width: '100%',
          aspectRatio: `${STAGE_WIDTH} / ${STAGE_HEIGHT}`,
          margin: '0 auto',
          background: '#181818',
          maxHeight: '100%',
        }}
      >
        {displayStage.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${y}-${x}`}
              style={{
                background:
                  cell[0] === 0
                    ? 'rgba(0,0,0,0.2)'
                    : currentTheme.tetrominoColors[cell[0]] ??
                      'rgba(255,255,255,0.9)',
                border: '1px solid #222',
              }}
            />
          ))
        )}
      </div>
      {/* Stats */}
      <div
        style={{
          width: '100%',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          lineHeight: '2',
          fontSize: '1rem',
          margin: 0,
          padding: 0,
          borderTop: 'none',
          position: 'absolute',
          top: '3rem',
          left: '0.5rem',
          zIndex: 3,
        }}
      >
        <span>Score: {score}</span>
        <span>Rows: {rows}</span>
        <span>Level: {level}</span>
      </div>
      {/* Controls/Start Button */}
      <div
        style={{
          width: '100%',
          height: '12rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          background: 'transparent',
          marginBottom: 8,
        }}
      >
        {!gameStarted && (
          <button
            onClick={startGame}
            style={{
              fontSize: '2rem',
              background: '#333',
              color: '#fff',
              padding: '1rem 2rem',
              border: 'none',
              cursor: 'pointer',
              margin: '0 0',
            }}
          >
            Start Game
          </button>
        )}
        {gameStarted && !gameOver && controls}
      </div>
      {/* Pause/Play and Exit Buttons */}
      {gameStarted && !gameOver && (
        <>
          <button
            onClick={() =>
              setDropTime((prev) => (prev ? null : 1000 / (level + 1) + 200))
            }
            className="control"
            style={{
              position: 'absolute',
              top: 8,
              left: 20,
              zIndex: 2,
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1.5rem',
              opacity: 0.9,
              background: 'none',
              padding: 0,
            }}
            aria-label={dropTime ? 'Pause' : 'Play'}
          >
            {dropTime ? (
              <img
                src={PauseButton}
                alt="Pause"
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'block',
                }}
              />
            ) : (
              <img
                src={PlayButton}
                alt="Play"
                style={{
                  width: '24px',
                  height: '24px',
                  display: 'block',
                }}
              />
            )}
          </button>
          <button
            onClick={() => {
              setGameStarted(false);
              setGameOver(false);
              setDropTime(null);
            }}
            className="control"
            style={{
              position: 'absolute',
              top: 8,
              right: 20,
              zIndex: 2,
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1.5rem',
              opacity: 0.9,
              background: 'none',
              padding: 0,
            }}
            aria-label="Stop Game"
          >
            <img
              src={ExitButton}
              alt="Exit"
              style={{
                width: '24px',
                height: '24px',
                display: 'block',
              }}
            />
          </button>
        </>
      )}
      {/* Game Over Overlay */}
      {gameOver && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
            fontSize: '2rem',
            background: 'rgba(0,0,0,0.7)',
            padding: '2rem 0',
            zIndex: 3,
          }}
        >
          <div className="text-6xl font-extrabold text-red-600">Game Over</div>
          <button
            onClick={startGame}
            style={{
              bottom: 0,
              marginTop: '1rem',
              border: 'solid 2px #fff',
              padding: '0.5rem 1rem',
              background: '#333',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Start New Game
          </button>
        </div>
      )}
    </div>
  );
}
