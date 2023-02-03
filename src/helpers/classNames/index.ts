type TObject = Record<string, any>
type TClassNamesArguments = (string |  any[] | TObject)[]

export default function classNames(...rest:TClassNamesArguments):string {
    const result: string[] = [];

    rest.forEach(item => {
        if(typeof item === 'string'){
            result.push(item)
        }else if(Array.isArray(item)){
            item.forEach(arr_item => result.push(arr_item.toString()))
        }else if(typeof item === 'object'){
            for (const [key, value] of Object.entries(item)) {
                if(Boolean(value)){
                    result.push(key.toString())
                }
              }
        }
    })

    return result.join(' ')
}