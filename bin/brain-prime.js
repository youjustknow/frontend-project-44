#!/usr/bin/env node

import startPrimeGame from '../src/games/prime.js';
import start from '../src/cli.js';

const userName = start();
startPrimeGame(userName);
