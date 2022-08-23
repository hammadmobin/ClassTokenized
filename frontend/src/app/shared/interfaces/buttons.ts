export enum Btn_Styles {
    primary,
    secondary
};

export interface BtnOptions {
    label: string;
    btnStyleType: Btn_Styles;
    url: string;

    [key: string]: any;
};
