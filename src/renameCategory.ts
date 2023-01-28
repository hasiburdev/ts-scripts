export const renameCatogory = (str: String): { id: number, name: string, quantity: number }[] => {

    const output = str
        .trim()
        .split("\n")
        .filter(line => line != '')
        .map(line => line.split("\("))
        .map((arr,index) => [arr[0].trim(), Number(arr[1]?.slice(0, arr[1].length -2)) || 0])
    return output.map((line, index) => ({
        id: index +1,
        name: line[0],
        quantity: line[1]
    })) as { id: number, name: string, quantity: number }[]
}




