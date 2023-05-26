/**
 *
 *  This holds the urls/srcs for the files
 *
 */

import { CDNFileReturn } from "./CDNReturns";

const FILE_RESUME_PDF = CDNFileReturn("resume", "Parker_Phelps_Resume", "pdf");
const FILE_RESUME_DOCX = CDNFileReturn(
  "resume",
  "Parker_Phelps_Resume",
  "docx"
);
const FILE_RESUME_DOC = CDNFileReturn("resume", "Parker_Phelps_Resume", "doc");

export { FILE_RESUME_DOC, FILE_RESUME_DOCX, FILE_RESUME_PDF };
