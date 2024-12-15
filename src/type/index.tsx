export type TaskT ={
    id:string;
    title:string;
    description:string;
    priority:string;
    deadline:number;
    image?:string;
    alt?:string;
    tags:{
        map(arg0: (tag: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;title:string,bg:string;text:string
}
}

type Column ={
    name:string;
    items:TaskT[];
}

export type Columns = {
    [key:string]:Column;
}