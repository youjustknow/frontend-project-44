#!/usr/bin/env node

import startGcdGame from '../src/games/gcd.js';
import start from '../src/cli.js';

const userName = start();
startGcdGame(userName);
