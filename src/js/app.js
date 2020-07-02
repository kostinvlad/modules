// TODO: write your code here
import sum from './basic';
import {Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './Game/game'

const game = new Game();
game.start();
