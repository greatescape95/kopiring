using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace TodoApi.Controllers
{

    [Route("api/todo")]
    public class TodoController : Controller
    {
        private readonly TodoContext _context;

        public TodoController(TodoContext context)
        {
            _context = context;

            if (_context.messages.Count() == 0)
            {
                _context.messages.Add(new TodoItem { 
                    contact_name = "Item1",
                    email = "test",
                    message_text = "djakshds" 
                    });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<TodoItem> GetAll()
        {
            return _context.messages.ToList();
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public IActionResult GetById(long id)
        {
            var item = _context.messages.FirstOrDefault(t => t.id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] TodoItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.messages.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetTodo", new { id = item.id }, item);
        }
    }
}