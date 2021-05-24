const data = require('./ex6.js');

describe('Testando a requisição API', () => {
  const apiFetch = jest.spyOn( data, 'newFetch')

  test('Testando caso a promise se resolva', () => {
    apiFetch.mockResolvedValue('request sucess')

    apiFetch()
    expect(apiFetch).toHaveBeenCalled()
    expect(apiFetch()).resolves.toBe('request sucess');
    expect(apiFetch).toHaveBeenCalledTimes(2);
  })

  test('Testando caso a promise se reject', () => {
    apiFetch.mockResolvedValue('request failed')

    apiFetch()
    expect(apiFetch).toHaveBeenCalled()
    expect(apiFetch()).rejects.toBe('request sucess');
    expect(apiFetch).toHaveBeenCalledTimes(4);
  })

})