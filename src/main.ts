import { renameCatogory } from './renameCategory'

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';

const main = () => {
    const output = renameCatogory(input);

    console.log(output);
}

process.stdin.on('data', inputStdin => input += inputStdin);
process.stdin.on('end', () => {
    main();
});
