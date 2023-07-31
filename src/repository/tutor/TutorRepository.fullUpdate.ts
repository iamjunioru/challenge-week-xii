import { Tutor } from '../../models/Tutor';

export class TutorRepositoryFullUpdate{
    static mockReturnValue(fullUpdateService: jest.Mock<any, any, any>) {
        throw new Error("Method not implemented.");
        return false;
    }

    async updateTutor(id: string, tutorData: any) {
        return Tutor.findByIdAndUpdate({_id: id}, tutorData, {
            new: true,
            runValidators: true
        });
    }

    async TutorExists(id: string) {
        const tutor = await Tutor.findById(id);
        return !!tutor;
    }
}

export const updateTutor = new TutorRepositoryFullUpdate().updateTutor;