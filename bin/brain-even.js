#!/usr/bin/env node

import startEvenGame from '../src/games/even.js';
import start from '../src/cli.js';

const userName = start();
startEvenGame(userName);
