import fetch from 'node-fetch';
import { format } from '@fast-csv/format';

const MAX_RUNNER_ID = 2802;

async function fetchRunner(runnerId) {
    return fetch(`https://2112-api.sirsean.workers.dev/runner/${runnerId}`).then(r => r.json());
}

async function main() {
    const stream = format({ headers: true });
    stream.pipe(process.stdout);
    for (let i=1; i <= MAX_RUNNER_ID; i++) {
        const runner = await fetchRunner(i);
        stream.write({
            runner: runner.id,
            NP: runner.attributes['Notoriety Points'],
        });
    }
    stream.end();
    console.log();
}

main();
