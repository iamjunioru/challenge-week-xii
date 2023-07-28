import { Tutor } from "../../models/Tutor";

export class TutorRepository {
    async getAll() {
        const pipeline = [
            {
                $set: {
                    date_of_birth: {
                        $dateToString: {
                            format: "%Y-%m-%d %H:%M",
                            date: "$date_of_birth",
                        },
                    },
                },
            },
            {
                $project: { password: false },
            },
        ];
        return await Tutor.aggregate(pipeline)
            .lookup({
                from: "pets",
                localField: "_id",
                foreignField: "tutorId",
                as: "pets",
                pipeline: [
                    {
                        $set: {
                            date_of_birth: {
                                $dateToString: {
                                    format: "%Y-%m-%d %H:%M",
                                    date: "$date_of_birth",
                                },
                            },
                        },
                    },
                ],
            })
            .project({
                "pets.tutorId": false,
                "tutors.password": false,
            });
    }
}
