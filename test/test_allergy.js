/*const { default: axios } = require("axios");
const { expect, assert } = require("chai");

describe("Comidapp-Allergy", function () {

  it("Agrego una alergia a un cliente", function () {
    const path = 'http://localhost:3000/alergias/addAllergyToClient'
    const properties = { clientId: 3, ingredientId: 1 }
    axios.post(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(201);
      }).catch(err => {
        expect(err.res.status).to.equal(409);
      })
  });

  it("Agrego una alergia ya existente a un cliente", function () {
    const path = 'http://localhost:3000/alergias/addAllergyToClient'
    const properties = { clientId: 1, ingredientId: 1 }
    axios.post(path, properties).
      then((res) => {
        expect(res.res.status).to.equal(201);
      }).catch(err => {
        expect(err.res.status).to.equal(409);
      })
  });

  it("Checkeo si un usuario tiene alergias (POR TRUE)", async function () {
    const properties = { clientId: 3 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.hasAllergy).to.equal(true);
  });

  it("Checkeo si un usuario tiene alergias (POR FALSE)", async function () {
    const properties = { clientId: 2 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientId'
    const result = await axios.get(path, { data: properties });
    expect(result.data.hasAllergy).to.equal(false);
  });

  it("Checkeo si un usuario tiene alergias a un ungrediente particular", async function () {
    const properties = { clientId: 3, ingredientId: 1 }
    const path = 'http://localhost:3000/alergias/checkAllergyByClientIdAndIngredientId'

    const result = await axios.get(path, { data: properties });

    expect(result.data.hasAllergy).to.equal(true);
  });

  it("Elimino todas las alergias de un cliente", async function () {
    const properties = { clientId: 3 }
    const path = 'http://localhost:3000/alergias/deleteAllAllergiesToClient'

    const result = await axios.delete(path, { data: properties });

    expect(result.data.result).to.equal('OK');
  });

});
*/