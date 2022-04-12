using WebApplication1.Models;

namespace WebApplication1.Callers
{
    public interface IRestCaller
    {
        Task<List<Book>> GetBooks();
        Task<Book> GetBook(int id);
        Task<HttpResponseMessage> DeleteBook(int id);
        Task<HttpResponseMessage> UpdateBook(int id, Book book);
        Task<HttpResponseMessage> CreateBook(Book book);

    }
}
