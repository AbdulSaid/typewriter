const sentence = "wow this is like magic \n";

let timer = 50
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50
  
}