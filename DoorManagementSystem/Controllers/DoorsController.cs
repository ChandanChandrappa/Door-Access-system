using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DoorManagementSystem.Services;
using DoorManagementSystem.Models;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DoorManagementSystem.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class DoorsController : ControllerBase
    {

        private readonly DoorsService _doorService;

        public DoorsController(DoorsService doorService)
        {
            this._doorService = doorService;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Door> Get()
        {
            return _doorService.GetAll();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/doors
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Door door)
        {
            return CreatedAtAction("Get", new { id = door.Id }, _doorService.Create(door));
        }

        // PUT api/doors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Door door)
        {
            _doorService.Update(id, door);

            return NoContent();
        }

        // DELETE api/doors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            _doorService.Delete(id);

            return NoContent();
        }
    }
}
