using System.Text;
using Newtonsoft.Json;
using WebApplication1.Models;


namespace WebApplication1.Callers
{
    public class RestCaller : IRestCaller
    {
        private string url;
        public RestCaller(IConfiguration config)
        {
            url = config.GetValue<string>("url");
        }

       

        public async Task<HttpResponseMessage> CreateBook(Book book)
        {

            using (var client = new HttpClient())
            {

                HttpContent httpContent = new StringContent(JsonConvert.SerializeObject(book), Encoding.UTF8);
                return await client.PostAsync($"{url}Books", httpContent);



            }


        }

        public async Task<HttpResponseMessage> DeleteBook(int id)
        {
            using (var client = new HttpClient())
            {
                return await client.DeleteAsync($"{url}Books/{id}");


            }
        }

        public async Task<Book> GetBook(int id)
        {
            
            using (var client = new HttpClient())
            {
                var result = await client.GetFromJsonAsync<Book>($"{url}Books/{id}");
                return result;
            }


        }

        public async Task<List<Book>> GetBooks()
        {
            
            
            using (var client = new HttpClient())
            {
                var result = await client.GetFromJsonAsync<List<Book>>($"{url}Books");
                return result;
            }


        }

        public async Task<HttpResponseMessage> UpdateBook( int id, Book book)
        {
          using (var client = new HttpClient())
            {
                  
                HttpContent httpContent = new StringContent(JsonConvert.SerializeObject(book), Encoding.UTF8);
               return await client.PutAsync($"{url}Books/{id}",httpContent);

                
                
            }
        }
    }
}
