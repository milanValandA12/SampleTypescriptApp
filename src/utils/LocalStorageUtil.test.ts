import LocalStorageUtils from './LocalStorageUtils';
const username = 'Milan';

describe('LocalStorageUtils test', () => {
  test('LocalStorageUtils test: setItem', async () => {
      const isSaved = await LocalStorageUtils.setItem('username', username);
      expect(isSaved).toBe(true);
  });

  test('LocalStorageUtils test: getItem', async () => {
    const saved = await LocalStorageUtils.getItem('username');
    expect(saved).toBe(username);
  });

  test('LocalStorageUtils test: removeItem', async () => {
    const saved = await LocalStorageUtils.removeItem('username');
    expect(saved).toBe(true);
    const checked = await LocalStorageUtils.getItem('username');
    expect(checked).toBeNull();
  });

  test('LocalStorageUtils test: setItem if key is null', async () => {
    const saved = await LocalStorageUtils.setItem(null, username);
    expect(saved).toBe(false);
  });

  test('LocalStorageUtils test: getItem if key is null', async () => {
    const saved = await LocalStorageUtils.getItem(null);
    expect(saved).toBe(null);
  });
});
