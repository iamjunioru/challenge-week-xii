export function isATutor(args: object): boolean {
    return (
        'name' in args &&
        'email' in args &&
        'password' in args &&
        'date_of_birth' in args &&
        'phone' in args &&
        'zip_code' in args
    );
}
