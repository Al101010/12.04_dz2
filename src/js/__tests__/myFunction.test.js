import sorteds from '../myFunction';

const sortMy = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
];

test('should sorteds', () => {
    const warsMy = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    // result = sorteds(warsMy);

    expect(sorteds(warsMy)).toBe(sortMy);
});