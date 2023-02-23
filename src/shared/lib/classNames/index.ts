/* eslint-disable @typescript-eslint/no-explicit-any */
type TObject = Record<string, any>
type TClassNamesArguments = (string| undefined | any[] | TObject)[]

export default function classNames(...rest:TClassNamesArguments):string {
    const result: string[] = [];

    rest.forEach((item) => {
        if (typeof item === 'string') {
            result.push(item);
        } else if (Array.isArray(item)) {
            item.forEach((arrItem) => result.push(arrItem.toString()));
        } else if (typeof item === 'object') {
            for (const [key, value] of Object.entries(item)) {
                if (value) {
                    result.push(key.toString());
                }
            }
        }
    });

    return result.join(' ');
}
