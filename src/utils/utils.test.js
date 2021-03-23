import { checkTimes } from './utils';

const initialTestState = { "timeToExpire": "2021-03-19T10:41:44.558Z", "users": [] };

it('should run utils correctly', () => {
    const util = checkTimes(initialTestState);

    expect(util).toEqual(true);
});