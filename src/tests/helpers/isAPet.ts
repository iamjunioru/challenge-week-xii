export function isAPet(args: object): boolean {
    return (
        'name' in args &&
        'species' in args &&
        'carry' in args &&
        'date_of_birth' in args &&
        'weight' in args &&
        'tutorId' in args
    );
}
