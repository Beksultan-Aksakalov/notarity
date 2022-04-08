using Application.Services;
using Application.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Notarity.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DocumentController : ControllerBase
    {
        private DocumentService _docService;
        public DocumentController(DocumentService docService)
        {
            _docService = docService;
        }
        [HttpPost]
        public FileResult GetDocument(DocumentReq document)
        {
            byte[] docBytes = _docService.GetDocumentFile(document);
            string file_type = "application/docx";
            string file_name = "editedTrustDocument.docx";
            return File(docBytes, file_type, file_name);
        }
    }
}
