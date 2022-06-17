const { default: axios } = require("axios");
const { expect, assert } = require("chai");

describe("Comidapp-Allergy", function () {
  it("Agrego una alergia a un cliente", async () => {
    const path = 'http://localhost:3000/alergias/addAllergyToClient'
    const properties = { clientId: 3, ingredientId: 1 }
    const result = await axios.post(path, properties);
    expect(result.status).to.equal(201);
  });

  it("Agrego una alergia ya existente a un cliente", async () => {
    const path = 'http://localhost:3000/alergias/addAllergyToClient'
    const properties = { clientId: 1, ingredientId: 1 }
    const result = await axios.post(path, properties);
    expect(result.data.result).to.equal('Alergia ya existente');
  });

  it("Checkeo alergia de usuario con parametro incorrecto", async () => {
    const properties = { clientId: 'asd' }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientId'


    axios.get(path, { data: properties })
      .catch((error) => {expect(error.status).to.equal(500)})
  });

  it("Checkeo si un usuario tiene alergias (POR TRUE)", async () => {
    const properties = { clientId: 3 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.hasAllergy).to.equal(true);
  });

  it("Checkeo si un usuario tiene alergias (POR FALSE)", async () => {
    const properties = { clientId: 2 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.hasAllergy).to.equal(false);
  });

  it("Checkeo si un usuario tiene alergias a un ungrediente particular", async () => {
    const properties = { clientId: 3, ingredientId: 1 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientIdAndIngredientId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.hasAllergy).to.equal(true);
  });

  it("Elimino todas las alergias de un cliente", async () => {
    const properties = { clientId: 3 }
    const path = 'http://localhost:3000/alergias/deleteAllAllergiesToClient'
    const result = await axios.delete(path, { data: properties });
    expect(result.data.result).to.equal('OK');
  });

});