export default function Paragraph({children}:{children:any}){
    return(
        <p className="text-lg mt-2 text-center text-gray-600">
            {children}
        </p>
    );
}