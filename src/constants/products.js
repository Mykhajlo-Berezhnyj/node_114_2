import path from 'node:path';
import { fileURLToPath } from 'node:url';

// export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json')
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

export const PATH_DB = path.resolve(_dirname , '../db', 'db.json');
export const PATH_FILES_DIR = path.resolve(_dirname, '../db/files');
