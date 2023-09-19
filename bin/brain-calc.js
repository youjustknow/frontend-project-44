#!/usr/bin/env node

import startCalcGame from '../src/games/calc.js';
import start from '../src/cli.js';

const userName = start();
startCalcGame(userName);
