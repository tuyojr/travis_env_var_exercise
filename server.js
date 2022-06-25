const dockerUsername = process.env.DOCKER_USERNAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${dockerUsername} is my docker username!`);
    await sleep(5000);
  }
}

main();
