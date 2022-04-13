using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Callers;
using WebApplication1.Models;


namespace WebApplication1.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        readonly IRestCaller restCaller1;
        public BookController(IRestCaller restCaller)
        {
            restCaller1 = restCaller;
        }
        [HttpGet, Route("Books")]
        public async Task<ActionResult> GetBooks()
        {
            List<Book> r = await restCaller1.GetBooks();


            return Ok(r);
        }
        [HttpGet, Route("Books/{id}")]
        public async Task<ActionResult> GetBook(int id)
        {
            Book r = await restCaller1.GetBook(id);


            return Ok(r);
        }
        [HttpDelete, Route("Books/{id}")]
        public async Task<ActionResult> DeleteBook(int id)
        {
            try
            {
               var res =  await restCaller1.DeleteBook(id);
                return Ok("Se ha eliminado el libro");
            }catch(Exception e)
            {
                return BadRequest(e.Message);
            }

            
        }
        [HttpPut, Route("Books/{id}")]
        public async Task<ActionResult> UpdateBook(int id, Book book)
        {
            try
            {
                var res = await restCaller1.UpdateBook(id,book);
                return Ok("Se ha Actualizado  el libro");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }


        }
        [HttpPost, Route("Books")]
        public async Task<ActionResult> CreateBook( Book book)
        {
            try
            {
                var res = await restCaller1.CreateBook( book);
                return Ok("Se ha Actualizado  el libro");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }


        }
    }
}
