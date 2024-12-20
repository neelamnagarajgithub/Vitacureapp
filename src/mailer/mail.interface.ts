export type Address = {
    name: string;
    address: string;
  };
export type sendMailDto = {
    from?:Address,
    recipients:Address[]|string,
    subject:string,
    text?:string,
    html:string,
    placeHolderReplacements?:Record<string,string>
}