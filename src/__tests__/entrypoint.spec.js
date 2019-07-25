import { isEnabled } from '../entrypoint';
import { toggleyApi } from '../featureProviders';

jest.mock('../featureProviders');

test('Returns true when feature is set to True', async () => {
    toggleyApi.getTreatmentsFromService = jest.fn().mockReturnValue({
        'feature1234': true
    })
    const result = await isEnabled('feature1234', 'userId1');
    expect(result).toBeTruthy();
});

test('Returns false when feature is set to False', async () => {
    toggleyApi.getTreatmentsFromService = jest.fn().mockReturnValue({
        'feature1234': false
    })
    const result = await isEnabled('feature1234', 'userId1');
    expect(result).toBeFalsy();
});

test('Returns false when feature is not set for this user', async () => {
    toggleyApi.getTreatmentsFromService = jest.fn().mockReturnValue({
        'feature1234': false
    })
    const result = await isEnabled('feature1234', 'userId1');
    expect(result).toBeFalsy();
});