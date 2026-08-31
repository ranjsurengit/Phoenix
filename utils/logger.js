import winston from 'winston';
import path from 'path';

// Define the log directory
const logDirectory = path.resolve(process.cwd(), 'logs');

// Define logging levels (Standard RFC5424 levels)
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define colors for each level
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

// Tell Winston about the colors
winston.addColors(colors);

// Standard text format for log files
const logFileFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`
  )
);

// Colorized format for the console
const consoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`
  )
);

// Create the logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug', // Default level
  levels,
  transports: [
    // 1. Output to Console (Colorized)
    new winston.transports.Console({
      format: consoleFormat,
    }),
    // 2. Output to logs/error.log (Error messages only)
    new winston.transports.File({
      filename: path.join(logDirectory, 'error.log'),
      level: 'error',
      format: logFileFormat,
    }),
    // 3. Output to logs/combined.log (All logs from debug and above)
    new winston.transports.File({
      filename: path.join(logDirectory, 'combined.log'),
      format: logFileFormat,
    }),
  ],
});

export default logger;
