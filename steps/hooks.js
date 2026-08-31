import { createBdd } from 'playwright-bdd';
import logger from '../utils/logger.js';

const { Before, After } = createBdd();

// This runs ONLY for scenarios tagged with @viewdocument
Before({ tags: '@CreateDocumentFlow' }, async ({ $testInfo }) => {
    logger.info(`==================================================`);
    logger.info(`[SCENARIO START] ${$testInfo.title}`);
    logger.info(`==================================================`);
});

After({ tags: '@CreateDocumentFlow' }, async ({ $testInfo }) => {
    logger.info(`==================================================`);
    logger.info(`[SCENARIO END] ${$testInfo.title} | Status: ${$testInfo.status}`);
    logger.info(`==================================================\n`);
});
