using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public long id { get; set; }
        public string contact_name { get; set; }
        public string email { get; set; }
        public string message_text { get; set; }
    }
}