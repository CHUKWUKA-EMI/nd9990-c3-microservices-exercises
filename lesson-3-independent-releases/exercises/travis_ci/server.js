function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("cool");
  while (true) {
    console.log("Containers rule!");
    await sleep(5000);
  }
}

main();
