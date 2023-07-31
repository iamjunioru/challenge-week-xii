import { partialUpdatePet } from "../../../repository/pet/PetRepository.partialUpdate";
import { Pet } from "../../../models/Pet";
import { connect, dropCollections, dropDB } from "../../helpers/db";

beforeAll(async () => {
  await connect();
});

afterEach(async () => {
  await dropCollections();
});

afterAll(async () => {
  await dropDB();
});

describe("Pet Repository partialUpdate", () => {
  it("should update a pet with valid data", async () => {
    const petData = {
      name: "any pet name",
      species: "any species",
      carry: "any carry",
      weight: 5,
      date_of_birth: new Date("1990-01-01 10:10"),
      tutorId: "any tutorId",
    };
    const pet = await Pet.create(petData);

    const updates = {
      name: "any pet name",
      date_of_birth: new Date("1990-01-01 10:10"),
    };

    const updatedPet = await partialUpdatePet(pet._id, updates);

    expect(updatedPet).toBeDefined();
    expect(updatedPet!.name).toEqual(updates.name);
    expect(updatedPet!.date_of_birth).toEqual(updates.date_of_birth);
  },); 

  it("should return null for a non-existent petId", async () => {
    const updates = {
      name: "any pet name",
      weight: 10,
    };
    const nonExistingPetId = "non existing petid";

    const updatedPet = await partialUpdatePet(nonExistingPetId, updates);

    expect(updatedPet).toBeNull();
  });
});
