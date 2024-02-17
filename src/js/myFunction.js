

export default function sorteds (arrayWars) {
    let result;
    result = arrayWars.sort((wars1, wars2) => wars2.health - wars1.health);
    return result;
}

// sorteds(warsMy);

// const sorted = users.sort((user1, user2) => user1[key] > user2[key] ? 1 : -1);











// export default function sorted(wars) {
//     wars.sort((wars1, wars2) => wars2.health - wars1.health) // почемуто не получается
// };








// const sortedWarsMy = warsMy.sort((wars1, wars2) => wars2.health - wars1.health); // получается

// console.log(sorted(warsMy));