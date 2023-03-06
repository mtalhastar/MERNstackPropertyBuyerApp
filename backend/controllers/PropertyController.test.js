const {validatePropertyName} = require('./PropertyController')

describe('Checks length of Property Name', () => {
    it('Valid length', () => {
      expect(validatePropertyName("ABC")).toEqual("ValidLength");
    });
  });

