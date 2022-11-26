export default function Paragraph({left, children}:{left? : any, children:any}){
    return(
        <p className={`text-lg mt-2 text-gray-600${!left ? " text-center" : ""}`}>
            {children}
        </p>
    );
}