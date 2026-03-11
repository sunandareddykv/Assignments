import * as fs from 'fs';
import {PDFParse} from 'pdf-parse';

export class pdfUtil{
    //Common method to read text content from PDF file
    static async readPdfContent(filePath: string ): Promise<string> {
           //Verify file exist in the path.
if (!fs.existsSync(filePath)) {
    throw new Error (`File not found at path: ${filePath}`);
}
//Read file content and return as string
const buffer = fs.readFileSync(filePath); //convert the file into byte strem
const result = await new PDFParse({data:buffer}).getText(); //extract the text using pdf parse class getText method

return result.text;

    }

}