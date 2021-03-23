import { isTimeExpire } from './isTimeExpire';

const initialTestState = { "timeToExpire": "2021-03-19T16:41:44.558Z", "users": [] };

it.only('should run utils correctly', () => {
    const util = isTimeExpire(initialTestState);

    expect(util).toEqual(false);
});