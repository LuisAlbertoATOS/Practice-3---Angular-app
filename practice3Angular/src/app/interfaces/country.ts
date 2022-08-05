export interface ICountry {
    name:string,
    capital:string[] | undefined,
    region:string,
    language:{ [key: string]: string; } | undefined,
    population:number,
    flag:string
}
