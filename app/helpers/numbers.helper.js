export const randomNumber = ({range, type = 'integer', min = 0}) => {
    const rand = Math.random() * range;
    const types = {
        decimal : rand => rand + min,
        integer : rand => Math.floor(rand) + min
    };
    return types[type](rand);
}