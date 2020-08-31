export const nonEmpty = field => field === '' ? 'Заповніть поле' : undefined;
export const noDigit = field => field.split("")
    .find(x => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        .map(x => x + '')
        .includes(x))
    ? '' : undefined;
export const validEmail = email => email.split("").some(c => c === '@') ? undefined : 'не вірний email';
