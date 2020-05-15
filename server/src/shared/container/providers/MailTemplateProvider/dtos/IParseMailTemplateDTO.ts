export default interface IParseMailTemplateDTO {
  template: string;
  variables: {
    [key: string]: string | number;
  };
}
