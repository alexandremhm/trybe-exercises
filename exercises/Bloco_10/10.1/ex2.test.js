// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .

const users = {
 4: { name: 'Mark' },
 5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('Exercicio 2', () => {
    it('found the user by searching for id', async () => {
      const findUser = await findUserById(4);
      expect(findUser).toEqual({ name: 'Mark' })
    })

    it("didn't found any user with this id", async () => {
      try {
        await findUserById(6)
      } catch(error) {
        expect(error).toEqual({ error: 'User with 6 not found.' })
      }
    })
  })