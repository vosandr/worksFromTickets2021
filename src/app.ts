import {fromFileWithPath} from 'textract';
import fs from 'fs';



fromFileWithPath('./Tickets.docx', (error, data) => {
  error?
  console.error(error):
  fs.writeFileSync('./Tickets.txt', data)
})