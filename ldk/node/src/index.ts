import access from './access';
import categories from './categories';
import operatingSystem from './operatingSystem';
import Plugin from './plugin';
import { Loop } from './loop';
import { Logger } from './logging';
import { serveLoop } from './serve';
import { LoopSensors } from './loopSensors';
import * as Browser from './loopClients/browserSensor';
import * as Clipboard from './loopClients/clipboardSensor';
import * as Cursor from './loopClients/cursorSensor';
import * as FileSystem from './loopClients/fileSystemSensor';
import * as Hover from './loopClients/hoverSensor';
import * as Keyboard from './loopClients/keyboardSensor';
import * as Process from './loopClients/processSensor';
import * as Storage from './loopClients/storageClient';
import * as Whisper from './loopClients/whisperSensor';
import * as Window from './loopClients/windowSensor';
import * as Network from './loopClients/networkSensor';

export {
  access,
  categories,
  operatingSystem,
  Loop,
  Plugin,
  Logger,
  serveLoop,
  LoopSensors,
  Browser,
  Clipboard,
  Cursor,
  FileSystem,
  Hover,
  Keyboard,
  Process,
  Storage,
  Whisper,
  Window,
  Network,
};
