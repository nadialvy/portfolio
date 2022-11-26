import classnames from "classnames";

export default function Paragraph({left, children}:{left? : any, children:any}){
    return(
        <p className={classnames(
            "text-lg mt-2 text-gray-600",
            !left && "text-center"
            )
        }>
            {children}
        </p>
    );
}