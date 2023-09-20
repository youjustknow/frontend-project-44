#!/usr/bin/env node

import startProgressionGame from '../src/games/progression.js';
import start from '../src/cli.js';

const userName = start();
startProgressionGame(userName);
