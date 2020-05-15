export default interface IFindAllInDayFromProviderDTO {
  provider_id: string;
  day: number;
  year: number;
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
