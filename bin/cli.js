import minimist from "minimist";
import { roll } from "#!/lib/roll.js";


const args = minimist(process.argv.slice(2));


const sides = args.sides || 6;
const dice = args.dice || 2;
const rolls = args.rolls || 1;

//let output = roll(sides, dice, rolls);


//console.log(JSON.stringify({"side": sides, "dice": dice, "roll": rolls, "output": output}));
console.log(JSON.stringify(roll(sides, dice, rolls)));

//process.exit(0);