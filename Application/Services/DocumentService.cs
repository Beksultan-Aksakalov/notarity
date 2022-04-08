using Application.ViewModels;
using GroupDocs.Editor;
using GroupDocs.Editor.Formats;
using GroupDocs.Editor.HtmlCss.Resources;
using GroupDocs.Editor.Options;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class DocumentService
    {
        public byte[] GetDocumentFile(DocumentReq doc)
        {
            Dictionary<string, string> dict = new Dictionary<string, string>();
            dict.Add("{DocNumber}", doc.Number.ToString());
            dict.Add("{DateBegin}", doc.DateBegin.ToString());
            dict.Add("{DateEnd}", doc.DateEnd.ToString());
            dict.Add("{DocDate}", doc.DocDate.ToString());
            dict.Add("{Action}", doc.Action.ToString());
            dict.Add("{Territory}", doc.Territory);
            dict.Add("{EmpFullName}", doc.Employee.FirstName
                              + " " + doc.Employee.LastName
                              + " " + doc.Employee.Patronymic);
            dict.Add("{LicenseDate}", doc.Employee.LicenseDate.ToString());
            dict.Add("{LicenseNumber}", doc.Employee.LicenseNumber);
            dict.Add("{EmpTerritory}", doc.Employee.Territory);
            dict.Add("{MajorClientFullName}", doc.MajorPerson.FirstName
                               + " " + doc.MajorPerson.LastName
                               + " " + doc.MajorPerson.Patronymic);
            dict.Add("{MajorClientIIN}", doc.MajorPerson.IINBIN.ToString());
            dict.Add("{MajorClientBirthDate}", doc.MajorPerson.BirthDate.ToString());
            dict.Add("{MajorClientBirthAddress}", doc.MajorPerson.BirthAddress.Territory.ToString()
                               + " " + doc.MajorPerson.BirthAddress.City
                               + " " + doc.MajorPerson.BirthAddress.Street
                               + " " + doc.MajorPerson.BirthAddress.AddInfo
                               + " " + doc.MajorPerson.BirthAddress.HomeNum.ToString());
            dict.Add("{MajorClientHomeAddress}", doc.MajorPerson.HomeAddress.Territory.ToString()
                               + " " + doc.MajorPerson.HomeAddress.City
                               + " " + doc.MajorPerson.HomeAddress.Street
                               + " " + doc.MajorPerson.HomeAddress.AddInfo
                               + " " + doc.MajorPerson.HomeAddress.HomeNum.ToString());
            dict.Add("{MinorClientFullName}", doc.MinorPerson.FirstName
                               + " " + doc.MinorPerson.LastName
                               + " " + doc.MinorPerson.Patronymic);
            dict.Add("{MinorClientIIN]", doc.MinorPerson.IINBIN.ToString());
            dict.Add("{MinorClientBirthDate}", doc.MinorPerson.BirthDate.ToString());
            dict.Add("{MinorClientBirthAddress}", doc.MinorPerson.BirthAddress.Territory.ToString()
                               + " " + doc.MinorPerson.BirthAddress.City
                               + " " + doc.MinorPerson.BirthAddress.Street
                               + " " + doc.MinorPerson.BirthAddress.AddInfo
                               + " " + doc.MinorPerson.BirthAddress.HomeNum.ToString());
            dict.Add("{MinorClientHomeAddress}", doc.MinorPerson.HomeAddress.Territory.ToString()
                               + " " + doc.MinorPerson.HomeAddress.City
                               + " " + doc.MinorPerson.HomeAddress.Street
                               + " " + doc.MinorPerson.HomeAddress.AddInfo
                               + " " + doc.MinorPerson.HomeAddress.HomeNum.ToString());

            using (FileStream fs = File.OpenRead("Files/TrustDocument.docx"))
            {
                using (Editor editor = new Editor(delegate { return fs; }))
                {
                    WordProcessingEditOptions editOptions = new WordProcessingEditOptions();
                    editOptions.FontExtraction = FontExtractionOptions.ExtractEmbeddedWithoutSystem;
                    editOptions.EnableLanguageInformation = true;
                    editOptions.EnablePagination = true;
                    using (EditableDocument beforeEdit = editor.Edit(editOptions))
                    {
                        string originalContent = beforeEdit.GetContent();
                        List<IHtmlResource> allResources = beforeEdit.AllResources;
                        string editedContent = "";

                        foreach (var item in dict)
                        {
                            editedContent = originalContent.Replace(item.Key, item.Value);
                        }
                        using (EditableDocument afterEdit = EditableDocument.FromMarkup(editedContent, allResources))
                        {
                            WordProcessingFormats docxFormat = WordProcessingFormats.Docx;
                            WordProcessingSaveOptions saveOptions = new WordProcessingSaveOptions(docxFormat);

                            saveOptions.EnablePagination = true;
                            saveOptions.Locale = System.Globalization.CultureInfo.GetCultureInfo("ru-RU");
                            saveOptions.OptimizeMemoryUsage = true;
                            using (FileStream outputStream = File.Create("Files/editedTrustDocument.docx"))
                            {
                                editor.Save(afterEdit, outputStream, saveOptions);
                            }
                        }
                    }
                }
            }
            string path = Path.Combine("Files/editedTrustDocument.docx");
            byte[] mas = File.ReadAllBytes(path);
            return mas;
        }
    }
}
