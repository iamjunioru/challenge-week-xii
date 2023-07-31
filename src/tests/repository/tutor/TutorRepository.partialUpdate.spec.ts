import { partialUpdateTutor } from "../../../repository/tutor/TutorRepository.partialUpdate";
import { Tutor } from "../../../models/Tutor";
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

describe("Tutor Repository partialUpdate", () => {
  it("should update a tutor with valid data", async () => {
    const tutorData = {
      name: "any name",
      email: "rjunior@email.com",
      password: "aaa-bbb-ccc",
      date_of_birth: new Date("1990-01-01 10:10"),
      phone: "88994953035",
      zip_code: "63400000",
    };
    const tutor = await Tutor.create(tutorData);

    const updates = {
      name: "any name",
      phone: "88994953035",
    };

    const updatedTutor = await partialUpdateTutor(tutor._id, updates);

    // checkif tutor was updated correct
    expect(updatedTutor).toBeDefined();
    expect(updatedTutor!.name).toEqual(updates.name);
    expect(updatedTutor!.phone).toEqual(updates.phone);
  }, 3000); // 3 sec

  it("should return tutor with a non-existent id", async () => {
    // call the partialUpdateTutor function with a non exist tutorid
    const updates = {
      name: "any name",
      phone: "88994953035",
    };
    const nonExistingId = "non existing id";

    const updatedTutor = await partialUpdateTutor(nonExistingId, updates);

    expect(updatedTutor).toBeNull();
  });
});
