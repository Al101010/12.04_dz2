export default function sorteds (arrayWars) {
    let result;
    result = arrayWars.sort((wars1, wars2) => wars2.health - wars1.health);
    return result;
}
